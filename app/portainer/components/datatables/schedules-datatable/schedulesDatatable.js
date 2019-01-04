angular.module('portainer.app').component('schedulesDatatable', {
  templateUrl: 'app/portainer/components/datatables/schedules-datatable/schedulesDatatable.html',
  controller: 'SchedulesDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    dataset: '<',
    tableKey: '@',
    orderBy: '@',
    reverseOrder: '<',
    removeAction: '<'
  }
});
