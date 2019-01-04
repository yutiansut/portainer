angular.module('portainer.extensions.registrymanagement')
.factory('RegistryV2Service', ['$q', 'RegistryCatalog', 'RegistryTags', 'RegistryManifests', 'RegistryV2Helper',
function RegistryV2ServiceFactory($q, RegistryCatalog, RegistryTags, RegistryManifests, RegistryV2Helper) {
  'use strict';
  var service = {};

  service.ping = function(id, forceNewConfig) {
    if (forceNewConfig) {
      return RegistryCatalog.pingWithForceNew({ id: id }).$promise;
    }
    return RegistryCatalog.ping({ id: id }).$promise;
  };

  service.repositories = function (id) {
    var deferred = $q.defer();

    RegistryCatalog.get({
      id: id
    }).$promise
    .then(function success(data) {
      var promises = [];
      for (var i = 0; i < data.repositories.length; i++) {
        var repository = data.repositories[i];
        promises.push(RegistryTags.get({
          id: id,
          repository: repository
        }).$promise);
      }
      return $q.all(promises);
    })
    .then(function success(data) {
      var repositories = data.map(function (item) {
        if (!item.tags) {
          return;
        }
        return new RegistryRepositoryViewModel(item);
      });
      repositories = _.without(repositories, undefined);
      deferred.resolve(repositories);
    })
    .catch(function error(err) {
      deferred.reject({
        msg: 'Unable to retrieve repositories',
        err: err
      });
    });

    return deferred.promise;
  };

  service.tags = function (id, repository) {
    var deferred = $q.defer();

    RegistryTags.get({
      id: id,
      repository: repository
    }).$promise
    .then(function succes(data) {
      deferred.resolve(data.tags);
    }).catch(function error(err) {
      deferred.reject({
        msg: 'Unable to retrieve tags',
        err: err
      });
    });

    return deferred.promise;
  };

  service.tag = function (id, repository, tag) {
    var deferred = $q.defer();

    var promises = {
      v1: RegistryManifests.get({
        id: id,
        repository: repository,
        tag: tag
      }).$promise,
      v2: RegistryManifests.getV2({
        id: id,
        repository: repository,
        tag: tag
      }).$promise
    };
    $q.all(promises)
    .then(function success(data) {
      var tag = RegistryV2Helper.manifestsToTag(data);
      deferred.resolve(tag);
    }).catch(function error(err) {
      deferred.reject({
        msg: 'Unable to retrieve tag ' + tag,
        err: err
      });
    });

    return deferred.promise;
  };

  service.addTag = function (id, repository, tag, manifest) {
    delete manifest.digest;
    return RegistryManifests.put({
      id: id,
      repository: repository,
      tag: tag
    }, manifest).$promise;
  };

  service.deleteManifest = function (id, repository, digest) {
    return RegistryManifests.delete({
      id: id,
      repository: repository,
      tag: digest
    }).$promise;
  };

  return service;
}
]);
