app.controller("moviesCtrl",function($scope, convert, Movie, $http){

    $scope.movies = [];
    
      $http.get("movies.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.movies.push(new Movie(response.data[i].name, response.data[i].link, 
            response.data[i].director, response.data[i].leng,response.data[i].actors))  
        }
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
    
   
});

