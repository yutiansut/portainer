angular.module('portainer.app', [])
.config(['$stateRegistryProvider', function ($stateRegistryProvider) {
  'use strict';

  var root = {
    name: 'root',
    abstract: true,
    resolve: {
      requiresLogin: ['StateManager', function (StateManager) {
        var applicationState = StateManager.getState();
        return applicationState.application.authentication;
      }]
    },
    views: {
      'sidebar@': {
        templateUrl: 'app/portainer/views/sidebar/sidebar.html',
        controller: 'SidebarController'
      }
    }
  };

  var portainer = {
    name: 'portainer',
    parent: 'root',
    abstract: true
  };

  var about = {
    name: 'portainer.about',
    url: '/about',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/about/about.html'
      }
    }
  };

  var account = {
    name: 'portainer.account',
    url: '/account',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/account/account.html',
        controller: 'AccountController'
      }
    }
  };

  var authentication = {
    name: 'portainer.auth',
    url: '/auth',
    params: {
      logout: false,
      error: ''
    },
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/auth/auth.html',
        controller: 'AuthenticationController'
      },
      'sidebar@': {}
    },
    data: {
      requiresLogin: false
    }
  };

  var endpoints = {
    name: 'portainer.endpoints',
    url: '/endpoints',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/endpoints/endpoints.html',
        controller: 'EndpointsController'
      }
    }
  };

  var endpoint = {
    name: 'portainer.endpoints.endpoint',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/endpoints/edit/endpoint.html',
        controller: 'EndpointController'
      }
    }
  };

  var endpointCreation  = {
    name: 'portainer.endpoints.new',
    url: '/new',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/endpoints/create/createendpoint.html',
        controller: 'CreateEndpointController'
      }
    }
  };

  var endpointAccess = {
    name: 'portainer.endpoints.endpoint.access',
    url: '/access',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/endpoints/access/endpointAccess.html',
        controller: 'EndpointAccessController'
      }
    }
  };

  var groups = {
    name: 'portainer.groups',
    url: '/groups',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/groups/groups.html',
        controller: 'GroupsController'
      }
    }
  };

  var group = {
    name: 'portainer.groups.group',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/groups/edit/group.html',
        controller: 'GroupController'
      }
    }
  };

  var groupCreation = {
    name: 'portainer.groups.new',
    url: '/new',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/groups/create/creategroup.html',
        controller: 'CreateGroupController'
      }
    }
  };

  var groupAccess = {
    name: 'portainer.groups.group.access',
    url: '/access',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/groups/access/groupAccess.html',
        controller: 'GroupAccessController'
      }
    }
  };

  var home = {
    name: 'portainer.home',
    url: '/home',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/home/home.html',
        controller: 'HomeController'
      }
    }
  };

  var init = {
    name: 'portainer.init',
    abstract: true,
    url: '/init',
    data: {
      requiresLogin: false
    },
    views: {
      'sidebar@': {}
    }
  };

  var initEndpoint = {
    name: 'portainer.init.endpoint',
    url: '/endpoint',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/init/endpoint/initEndpoint.html',
        controller: 'InitEndpointController'
      }
    }
  };

  var initAdmin = {
    name: 'portainer.init.admin',
    url: '/admin',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/init/admin/initAdmin.html',
        controller: 'InitAdminController'
      }
    }
  };

  var extensions = {
    name: 'portainer.extensions',
    url: '/extensions',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/extensions/extensions.html',
        controller: 'ExtensionsController'
      }
    }
  };

  var extension = {
    name: 'portainer.extensions.extension',
    url: '/extension/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/extensions/inspect/extension.html',
        controller: 'ExtensionController'
      }
    }
  };

  var registries = {
    name: 'portainer.registries',
    url: '/registries',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/registries/registries.html',
        controller: 'RegistriesController'
      }
    }
  };

  var registry = {
    name: 'portainer.registries.registry',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/registries/edit/registry.html',
        controller: 'RegistryController'
      }
    }
  };

  var registryCreation  = {
    name: 'portainer.registries.new',
    url: '/new',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/registries/create/createregistry.html',
        controller: 'CreateRegistryController'
      }
    }
  };

  var registryAccess = {
    name: 'portainer.registries.registry.access',
    url: '/access',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/registries/access/registryAccess.html',
        controller: 'RegistryAccessController'
      }
    }
  };

  var schedules = {
    name: 'portainer.schedules',
    url: '/schedules',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/schedules/schedules.html',
        controller: 'SchedulesController'
      }
    }
  };

  var schedule = {
    name: 'portainer.schedules.schedule',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/schedules/edit/schedule.html',
        controller: 'ScheduleController'
      }
    }
  };

  var scheduleCreation  = {
    name: 'portainer.schedules.new',
    url: '/new',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/schedules/create/createschedule.html',
        controller: 'CreateScheduleController'
      }
    }
  };

  var settings = {
    name: 'portainer.settings',
    url: '/settings',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/settings/settings.html',
        controller: 'SettingsController'
      }
    }
  };

  var settingsAuthentication = {
    name: 'portainer.settings.authentication',
    url: '/auth',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/settings/authentication/settingsAuthentication.html',
        controller: 'SettingsAuthenticationController'
      }
    }
  };

  var stacks = {
    name: 'portainer.stacks',
    url: '/stacks',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/stacks/stacks.html',
        controller: 'StacksController'
      }
    }
  };

  var stack = {
    name: 'portainer.stacks.stack',
    url: '/:name?id&type&external',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/stacks/edit/stack.html',
        controller: 'StackController'
      }
    }
  };

  var stackCreation = {
    name: 'portainer.newstack',
    url: '/newstack',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/stacks/create/createstack.html',
        controller: 'CreateStackController'
      }
    }
  };

  var support = {
    name: 'portainer.support',
    url: '/support',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/support/support.html',
        controller: 'SupportController'
      }
    },
    params: {
      product: {}
    }
  };

  var supportProduct = {
    name: 'portainer.support.product',
    url: '/product',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/support/product/product.html',
        controller: 'SupportProductController'
      }
    }
  };

  var tags = {
    name: 'portainer.tags',
    url: '/tags',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/tags/tags.html',
        controller: 'TagsController'
      }
    }
  };

  var updatePassword = {
    name: 'portainer.updatePassword',
    url: '/update-password',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/update-password/updatePassword.html',
        controller: 'UpdatePasswordController'
      },
      'sidebar@': {}
    }
  };

  var users = {
    name: 'portainer.users',
    url: '/users',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/users/users.html',
        controller: 'UsersController'
      }
    }
  };

  var user = {
    name: 'portainer.users.user',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/users/edit/user.html',
        controller: 'UserController'
      }
    }
  };

  var teams = {
    name: 'portainer.teams',
    url: '/teams',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/teams/teams.html',
        controller: 'TeamsController'
      }
    }
  };

  var team = {
    name: 'portainer.teams.team',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/teams/edit/team.html',
        controller: 'TeamController'
      }
    }
  };

  var templates = {
    name: 'portainer.templates',
    url: '/templates',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/templates/templates.html',
        controller: 'TemplatesController'
      }
    }
  };

  var template = {
    name: 'portainer.templates.template',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/templates/edit/template.html',
        controller: 'TemplateController'
      }
    }
  };

  var templateCreation = {
    name: 'portainer.templates.new',
    url: '/new',
    views: {
      'content@': {
        templateUrl: 'app/portainer/views/templates/create/createtemplate.html',
        controller: 'CreateTemplateController'
      }
    }
  };

  $stateRegistryProvider.register(root);
  $stateRegistryProvider.register(portainer);
  $stateRegistryProvider.register(about);
  $stateRegistryProvider.register(account);
  $stateRegistryProvider.register(authentication);
  $stateRegistryProvider.register(endpoints);
  $stateRegistryProvider.register(endpoint);
  $stateRegistryProvider.register(endpointAccess);
  $stateRegistryProvider.register(endpointCreation);
  $stateRegistryProvider.register(groups);
  $stateRegistryProvider.register(group);
  $stateRegistryProvider.register(groupAccess);
  $stateRegistryProvider.register(groupCreation);
  $stateRegistryProvider.register(home);
  $stateRegistryProvider.register(init);
  $stateRegistryProvider.register(initEndpoint);
  $stateRegistryProvider.register(initAdmin);
  $stateRegistryProvider.register(extensions);
  $stateRegistryProvider.register(extension);
  $stateRegistryProvider.register(registries);
  $stateRegistryProvider.register(registry);
  $stateRegistryProvider.register(registryAccess);
  $stateRegistryProvider.register(registryCreation);
  $stateRegistryProvider.register(schedules);
  $stateRegistryProvider.register(schedule);
  $stateRegistryProvider.register(scheduleCreation);
  $stateRegistryProvider.register(settings);
  $stateRegistryProvider.register(settingsAuthentication);
  $stateRegistryProvider.register(stacks);
  $stateRegistryProvider.register(stack);
  $stateRegistryProvider.register(stackCreation);
  $stateRegistryProvider.register(support);
  $stateRegistryProvider.register(supportProduct);
  $stateRegistryProvider.register(tags);
  $stateRegistryProvider.register(updatePassword);
  $stateRegistryProvider.register(users);
  $stateRegistryProvider.register(user);
  $stateRegistryProvider.register(teams);
  $stateRegistryProvider.register(team);
  $stateRegistryProvider.register(templates);
  $stateRegistryProvider.register(template);
  $stateRegistryProvider.register(templateCreation);
}]);
