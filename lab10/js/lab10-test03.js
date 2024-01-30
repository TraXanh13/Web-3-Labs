

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
   
   
   const select = document.querySelector("#countries");
   
   /* -------------------------------------------------------------
   When button is clicked, fetch data and populate select element 
   */
  document.addEventListener("click", (e) => {
     if(e.target.id === "fetchButton"){
        fetch(countryAPI)
        .then(res => res.json())
        .then(data =>{
           loaders[0].style.display = "block";
           
           const countries = []
           
           data.forEach((country) => {
              const option = document.createElement("option");
              option.value = country.iso;
              option.textContent = country.name;
              countries.push(option)
            })
            
            select.replaceChildren(document.querySelectorAll("#countries").childNodes, ...countries)
            
            loaders[0].style.display = "none";
            document.querySelector("main").style.display = "block";
         })
      }
   });

   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */
   select.addEventListener("change", (e) => {
      fetch(photoAPI)
         .then(res => res.json())
         .then(data => {
            const imgSection = document.querySelector("#results")

            imgSection.style.display = "none"
            loaders[1].style.display = "block";
            
            imgSection.innerHTML = "";
            
            data.forEach((x) => {
               if(x.location.iso == e.target.value) {
                  const img = document.createElement("img");
                  
                  img.src = imageURL + x.filename;
                  img.title = x.title;
                  img.alt = x.title;
                  
                  imgSection.appendChild(img);
               }
            })
            loaders[1].style.display = "none";
            imgSection.style.display = "block"
         })
   })

});