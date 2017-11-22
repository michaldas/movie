app.factory("Movie", function(convert){
    function Movie(name,link,director,leng,actors) {
        this.name = name;
        this.link = link;
        this.director = director;
        this.leng = leng;
        this.lengString=convert.hourmin(this.leng);
        this.actors=actors;
    }  
    return Movie;



});