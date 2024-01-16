document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   
   
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

   function populateLocations(data, id) {
      const select = document.querySelector(id);
      const sortedData = sortLocations(data);
      const options = [];

      options.push(document.querySelector(id).firstElementChild)
      
      sortedData.forEach((d) => {
         const option = document.createElement("option");
         option.value = d.iso;
         option.textContent = d.name;
         options.push(option)
      });

      select.replaceChildren(select.childNodes, ...options);
   }
   
   function populateUsers(users) {
      const select = document.querySelector("users");
      const options = []
      const sortedUsers = users.sort((a, b) => {
         if(a.firstName > b.firstName) {
            return 1;
         } else if(a.firstName < b.firstName) {
            return -1;
         } else if (a.lastName > b.lastName) {
            return 1;
         }
         return -1;
      })

      sortedUsers.forEach((user) => {
         const option = document.createElement("option");
         option.value = user.id;

         console.log(user);
      })      
   }

   async function parallelPromises() {
      let countryPromise = getPromise(countryAPI);
      let cityPromise = getPromise(cityAPI);
      let continenetPromise = getPromise(continentAPI);
      let userPromise = getPromise(userAPI);
      let photoPromise = getPromise(photoAPI);

      Promise.all([countryPromise, cityPromise, continenetPromise, userPromise, photoPromise])
         .then((values) => {
            populateLocations(values[0], "#countries");
            populateLocations(values[1], "#cities");
            populateLocations(values[2], "#continents");
            populateUsers(values[3]);
         })
   }

   parallelPromises();
});