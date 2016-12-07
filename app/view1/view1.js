'use strict';

angular.module('view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: '$ctrl'
        });
    }])

.controller('View1Ctrl', ['$scope', function($scope) {
    var vm = this;
    vm.dataPackets = [];
    var client = new MqttClient({
        host: '92.168.1.1',
        port: 1883,

    });


    vm.connect = function() {
        client.connect(function(client) {
            console.log('connected');
        })
        client.on('message', function handleMessage(topic, payload, details) {
            vm.dataPackets.push(payload);
        });
        client.on('connecting', function handleMessage(err) {
            console.log('connecting');
        });
    }
    vm.disconnect = function() {
        client.disconnect()

    }
    vm.subscribe = function() {
        client.subscribe('topic', function callback(error, granted) {})

    }
    vm.unsubscribe = function() {
        client.unsubscribe('topic', function callback(error) {})

    }
    vm.ping = function() {
        console.log('pinging  :');
        // don't know what to implement here
    }




}]);
