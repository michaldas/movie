app.factory("Actor" ,function() {
 function Actor(firstName,lastName,image,link) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.link = link;
}
return Actor;

});  