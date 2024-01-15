document.addEventListener("DOMContentLoaded", function() {
   // if HTTPS certificate has expired, then change protocol from https to http
   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   
   
   // Returns a promise
   async function getPromise(url) {
      try {
         const res = await fetch(url);
         const data = res.json();
         return data;
      } catch (err) {
         console.log(err)
      }
   }


   async function parallelPromises() {
      let countryPromise = getPromise(countryAPI);
      let cityPromise = getPromise(cityAPI);
      let continenetPromise = getPromise(continentAPI);
      let userPromise = getPromise(userAPI);
      let photoPromise = getPromise(photoAPI);

      Promise.all([countryPromise, cityPromise, continenetPromise, userPromise, photoPromise])
         .then((values) => {
            console.log(values[2]);
         })
   }

   parallelPromises();
});