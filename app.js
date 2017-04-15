(function(){
    
var app = angular.module('store', []);
    app.controller('storeController', function($scope, placesFactory){
        $scope.places;
        
        placesFactory.getPlaces().then(function(response){
           $scope.places = response.data; 
        });
    });
    
        app.factory('placesFactory', function($http){

            function getPlaces(){
                return $http.get('data.json');
            }

            return {
                getPlaces: getPlaces
            }
        }); 


    })();    