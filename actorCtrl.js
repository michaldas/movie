app.controller("actorCtrl", function($scope) {
    function Actor(firstName,lastName,image,link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.link = link;
    }  
    $scope.actors = [new Actor("Gal","Gadot","https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),
    new Actor("Gal","Gadot","https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),
    new Actor("Natalie","Portman","https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY317_CR11,0,214,317_AL_.jpg","http://www.imdb.com/name/nm0000204/?ref_=nv_sr_3"),
    new Actor("Julia","Roberts","https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm0000210/?ref_=nv_sr_1"),
    new Actor("Gal","Gadot","https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),
    new Actor("Gal","Gadot","https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg","http://www.imdb.com/name/nm2933757/?ref_=nv_sr_1"),
    

    ];
    $scope.sortBy = function() {
        $scope.orderProp = "lastName";
      }
});