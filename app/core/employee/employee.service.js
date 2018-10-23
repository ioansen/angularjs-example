angular.module('core.employee').
    factory('Employee', ['$http', function($http) {

        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const urlBase = "http://localhost:8080/rest/employees";
        //var urlBase = "http://localhost:8081/employees/employees.json";
        var service = {};

        service.list = function () {
            return $http.get(urlBase).then(function (resp) {
                return resp.data;
            });
        };

        service.create = function (e) {
            return $http.post(urlBase, e);
        };

        service.read = function (id) {
            return $http.get(urlBase + '/' + id).then(function (resp) {
                return resp.data;
            });
        };

        service.update = function (e) {
            return $http.put(urlBase + '/' + e.id, e)
        };

        service.delete = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return service;
    }]);
