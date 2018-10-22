angular.module('core.employee').
    factory('Employee', ['$http', function($http) {

        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const urlBase = "http://localhost:8080/rest/employees";
        //var urlBase = "http://localhost:8081/employees/employees.json";
        var dataFactory = {};

        dataFactory.list = function () {
            return $http.get(urlBase);
        };

        dataFactory.create = function (e) {
            return $http.post(urlBase, e);
        };

        dataFactory.read= function (id) {
            return $http.get(urlBase + '/' + id);
        };

        dataFactory.update = function (e) {
            return $http.put(urlBase + '/' + e.id, e)
        };

        dataFactory.delete = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return dataFactory;
    }]);
