document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   

   document.querySelector("#loader1").style.display = "none";
   document.querySelector("#loader2").style.display = "none";
   document.querySelector("main").style.display = "none";
   
   async function getPromise(url) {
      try {
         const res = await fetch(url);
         const data = res.json();
         return data;
      } catch (err) {
         console.log(err)
      }
   }
   
   function sortLocations(data) {
      const sorted = data.sort((a, b) => {
         return a.name === b.name ? 0 : a.name > b.name? 1 : -1;
      })
      
      return sorted;
   }
   
   function populateContinents(data) {
      const select = document.querySelector("#continents");
      const sortedCont = sortLocations(data);
      const options = [];
      
      options.push(select.firstElementChild)
      
      sortedCont.forEach((d) => {
         const option = document.createElement("option");
         option.value = d.code;
         option.textContent = d.name;
         options.push(option)
      });
      
      select.replaceChildren(select.childNodes, ...options);
   }
   
   function populateCountries(data) {
      const select = document.querySelector("#countries");
      const sortedData = sortLocations(data);
      const options = [];
      
      options.push(select.firstElementChild)
      
      sortedData.forEach((d) => {
         const option = document.createElement("option");
         option.value = d.iso;
         option.textContent = d.name;
         options.push(option)
      });
      
      select.replaceChildren(select.childNodes, ...options);
   }
   
   function populateCities(data) {
      const select = document.querySelector("#cities");
      const sortedData = sortLocations(data);
      
      select.replaceChildren(select.childNodes, select.firstElementChild);
      
      sortedData.forEach((d) => {
         const option = document.createElement("option");
         option.value = d.id;
         option.textContent = d.name;
         select.appendChild(option);
      });
   }
   
   function populateUsers(users) {
      const select = document.querySelector("#users");
      const sortedUsers = users.sort((a, b) => {
         if(a.lastName > b.lastName) {
            return 1;
         } else if(a.lastName < b.lastName) {
            return -1;
         } else if (a.firstName > b.firstName) {
            return 1;
         }
         return -1;
      })
      
      select.replaceChildren(select.childNodes, select.firstElementChild);
      
      sortedUsers.forEach((user) => {
         const option = document.createElement("option");
         option.value = user.id;
         option.textContent = user.lastName;
         select.appendChild(option);
      })      
   }
   
   document.querySelector("#fetchButton").addEventListener("click", async () =>{
      let countryPromise = getPromise(countryAPI);
      let cityPromise = getPromise(cityAPI);
      let continenetPromise = getPromise(continentAPI);
      let userPromise = getPromise(userAPI);
      
      document.querySelector(".lds-ring").style.display = "inline-block";
      document.querySelector("main").style.display = "none";
      
      Promise.all([countryPromise, cityPromise, continenetPromise, userPromise])
      .then((values) => {
         populateCountries(values[0]);
         populateCities(values[1]);
         populateContinents(values[2]);
         populateUsers(values[3]);
      })
      
      document.querySelector("main").style.display = "inline-block";
      document.querySelector("#loader1").style.display = "none";
   });

   function clearOtherFilters(currFilter) {
      let filters = document.querySelectorAll("select");

      filters.forEach((f) => {
         if(f.id != currFilter) {
            f.selectedIndex = 0;
         }
      })
   }

   async function getPhotos(url) {
      const res = await fetch(url);
      const data = res.json();
      return data;

      // fetch(url)
      // .then(res => res.json())
      // .then(data => {
      //    console.log(data);

      //    const imgSection = document.querySelector("#results")
      //    imgSection.replaceChildren();
         
      //    document.querySelector("#loader2").style.display = "inline-block";
      //    imgSection.style.display = "none"

      //    data.forEach((x) => {
      //       const img = document.createElement("img");
            
      //       img.src = imageURL + x.filename;
      //       img.title = x.title;
      //       img.alt = x.title;
            
      //       imgSection.appendChild(img);
      //    });

      //    document.querySelector("#loader2").style.display = "none";
      //    imgSection.style.display = "block"
      // }) 
   }
   
   document.body.addEventListener("change", async (e) => {
      let photoUrl = `${photoAPI}?`;

      switch(e.target.id) {
         case "countries":
            photoUrl += `iso=${e.target.value}`;
            break;
         case "continents":
            photoUrl += `continent=${e.target.value}`;
            break;
         case "cities":
            photoUrl += `city=${e.target.value}`;
            break;
         case "users":
            photoUrl += `user=${e.target.value}`;
            break;
      }

      clearOtherFilters(e.target.id);
      let photos = await getPhotos(photoUrl);

      photos.forEach(p => {
         console.log(p);
      })
   })
});