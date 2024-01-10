import { getPaintingData }  from "./paintings.js";
document.addEventListener("DOMContentLoaded", function() {
   
   const main = document.querySelector('main');
   const paintings = getPaintingData();
   paintings.forEach( (p) => {
      main.appendChild( p.render() );
   });
   // if HTTPS certificate has expired, then change protocol from https to http
   const url = "https://www.randyconnolly.com/funwebdev/3rd/async-post.php";

   // set up button handlers here using event delegation
   document.querySelector('main').addEventListener('click', (e) => {
      if (e.target.nodeName.toLowerCase() == 'button') {      // retrieve data from button and  
         let id = e.target.getAttribute('data-id');      // get painting object for this button 
         let p = paintings.find( p => p.id == id); 

         let formBody = new FormData(); 
         formBody.set("id",p.id); 
         formBody.set("title",p.title);

         const opt = { 
            method: 'POST', 
            body: formBody        
         };

         // now let's post via fetch 
         fetch(url, opt) 
         .then( resp => resp.json() ) 
         .then( data => {       
            // display notification it was successful 
            showSnackBar(`${data.received.title} was added to 
         favorites`); 
            }) 
         .catch( error => { 
            showSnackBar('An error occurred, favorites not modified'); 
            });          
         }
   });

   function showSnackBar(message) { 
      const snack = document.querySelector("#snackbar"); 
      snack.textContent = message; 
      snack.classList.add("show"); 
      setTimeout( () => { 
         snack.classList.remove("show"); 
      }, 3000); 
   }
});