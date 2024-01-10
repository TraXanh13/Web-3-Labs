

document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';


   // first hide loaders and main element 
   let loaders = document.querySelectorAll(".lds-ring");
   loaders.forEach((x) => {
      x.style.display = "none";
   });

   document.querySelector("main").style.display = "none";

   // then handle button click 



   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */
   document.addEventListener("click", (e) => {
      if(e.target.id === "fetchButton"){
         console.log(e.target.id);
      }
   });

   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */



});