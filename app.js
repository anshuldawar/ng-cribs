(function(){
    
var app = angular.module('store', []);
    app.controller('storeController', function($scope, placesFactory){
        $scope.places;
        
        placesFactory.getPlaces().then(function(response){
           $scope.places = response.data; 
        });
        
        $scope.sayHello = function(){
            console.log("Hello");
        }(
    });
    
        app.factory('placesFactory', function($http){

            function getPlaces(){
                return $http.get('data.json');
            }

            return {
                getPlaces: getPlaces
            }
        }); 
    
        app.filter('placeFilter', function(){
            return function(listings, priceInfo){
                var filtered = [];

                var min = priceInfo.min;
                var max = priceInfo.max;

            angular.forEach(listings, function(listing){
                if(listing.price >= min && listing.price <=max){
                    filtered.push(listing);
                }
            })
            }
        });
    })();    
