app.factory("convert", function () {
    function convertminToHours(leng) {
        var hour = Math.floor(leng / 60) ;
        var min = leng % 60;
        return hour.toString() + "h " + min.toString() + " min";
    }
   return{
  hourmin :convertminToHours
   } 
})