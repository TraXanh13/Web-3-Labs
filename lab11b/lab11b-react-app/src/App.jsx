import Company from './componenets/Company.jsx';
import {useState} from 'react';

function App() {

  const [comps, setComps] = useState(    
    [
      {name: "FaceBook", symbol: "FB", 
        sector: "Internet Software", 
        hq: "Menlo Park, California"},
      {name: "Alphabet Inc Class A", symbol: "GOOG", 
        sector: "Information Technology", 
        hq: "Mountain View, California"},
      {name: "Apple", symbol: "AAPL", 
        sector: "Information Technology", 
        hq: "Cupertino, California"},
      {name: "AT&T", symbol: "T", 
        sector: "Telecommunications Services", 
        hq: "Dallas, Texas"}
    ]
  );

    const [change, setChange] = useState(0);
    const handler = () => {
      let temp = change + 1;
      setChange(temp);
      // make a copy of the comps array
      const comp = [...comps];
      // modify the copy
      copy[0].name = temp;
      // change the state to use this altered copy
      setComps(tempArray);
    }

  console.log("**** App render change="+change+" "+comps[0].name);
  return (
    <section className="content box">
      <button className="button is-success" onClick={handler}>
      Change = {change}</button>
      { comps.map( (c,indx) => <Company data={c} key={indx}/>)  }
    </section>
  );

}

export default App
