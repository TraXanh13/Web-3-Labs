import { useState } from 'react';
import TutorialHeader from './TutorialHeader.jsx';
import TransferColumn from './TransferColumn.jsx';


const TransferLists = (props) => {
   // starting data
   const movies = [
      { "id": 13, "title": "American Beauty" },
      { "id": 14, "title": "Be Cool" },
      { "id": 48, "title": "The Hateful Eight"},
      { "id": 102, "title": "A Beautiful Mind"},
      { "id": 212, "title": "Jaws"},
      { "id": 229, "title": "The Wild Bunch"},
      { "id": 306, "title": "Gangs of New York"},
      { "id": 352, "title": "Diamonds Are Forever"},
      { "id": 399, "title": "The Last of the Mohicans"}
   ];

   // responsible for moving a movie from source to destination
   const moveFromSourceToDestination = (id) => {
      // first find movie to move
      const movieTo = source.find (m => m.id == id);
      // create new array which doesn't contain that movie
      const newSource = source.filter( m => m.id != id );
      // update source state
      setSource(newSource);
      // add movie to destination
      destination.push(movieTo)
      // update destination source
      setDestination(destination);
   };

   // responsible for moving a movie from destination to source
   const moveFromDestinationToSource = (id) => {
      const movieTo = destination.find (m => m.id == id);
      const newDest = destination.filter( m => m.id != id );
      setDestination(newDest);
      source.push( movieTo)
      setSource(source);
   };

   const [source, setSource] = useState(movies);
   const [destination, setDestination] = useState([]);
 

   return (      
      <main >
         <TutorialHeader subtitle="Component Data Flow" />
         <article className="columns">
            <TransferColumn heading="Source" data={source} update={moveFromSourceToDestination}/>
            <TransferColumn heading="Destination" data={destination} update={moveFromDestinationToSource}/>
         </article>        
      </main>      
   );
   
}

export default TransferLists;