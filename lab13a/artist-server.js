const path = require("path");
const express = require('express');
const fs = require("fs");
const jsonPath = path.join(__dirname, 'data/artists.json')
const jsonData = fs.readFileSync(jsonPath, 'utf-8')
const artists = JSON.parse(jsonData);

const app = express();

app.use('/api/artists/name/:value', (req, res) => {
    const lNameSearch = req.params.value.toLowerCase();

    // search the array of objects for a match 
    const matches = artists.filter(a => lNameSearch === a.LastName.substring(0, lNameSearch.length).toLowerCase());       
    
    // return the matching stock 
    if (matches.length > 0) { 
        res.json(matches);    
    } else {      
        res.json({message: `${lNameSearch} not found`});    
    }
})

app.use('/api/artists/nationality/:value', (req, res) => {
    const nationalitySearch = req.params.value.toLowerCase();

    // search the array of objects for a match 
    const matches = artists.filter(a => nationalitySearch === a.Nationality.toLowerCase());       
    
    // return the matching stock 
    if (matches.length > 0) { 
        res.json(matches);    
    } else {      
        res.json({message: `Nationality ${nationalitySearch} not found`});    
    }
})

app.use('/api/artists/:id', (req, res) => {
    const idSearch = req.params.id;

    // search the array of objects for a match 
    const matches = artists.filter(a => idSearch === a.ArtistID);       
    
    // return the matching stock 
    if (matches.length > 0) { 
        res.json(matches);    
    } else {       
        res.json({message: `ID ${idSearch} not found`});  
    }
})


// handle all requests
app.use('/', (req, res) => {
    res.json(artists);
})

 // Use express to listen to port 
 let port = 8080; 
 app.listen(port, () => { 
     console.log("Server running at port= " + port); 
 }); 