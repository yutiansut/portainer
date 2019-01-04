angular.module('portainer.docker').component('dockerSidebarContent', {
  templateUrl: 'app/docker/components/dockerSidebarContent/dockerSidebarContent.html',
  bindings: {
    endpointApiVersion: '<',
    swarmManagement: '<',
    standaloneManagement: '<',
    adminAccess: '<',
    offlineMode: '<'
  }
});
