$(document).ready(function(){
   $('.sidenav').sidenav();
   $('.slider').slider({
    indicators:false,
    interval:2000,
    duration:2000,
   });
   $('.tabs').tabs({
    duration:1000
   });
   $('.collapsible').collapsible();
   $('input.autocomplete').autocomplete({
         data: {
           "Diseño web": null,
           "Redes de datos": null,
         },
         minLength:3
       });
 });
      