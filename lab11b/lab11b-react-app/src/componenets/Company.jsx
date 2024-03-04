import CompanyLogo from './CompanyLogo.jsx';

const Company = (props) => {

  const edit = () => {
    alert("Now editing " + props.data.name);
  };

   const renderNormal = () => {
      return (
         <article className="box media ">
           <CompanyLogo symbol={props.data.symbol} />
           <div className="media-content">
               <h2>{props.data.name}</h2>
               <p><strong>Symbol:</strong> {props.data.symbol}</p>
               <p><strong>Sector:</strong> {props.data.sector}</p>
               <p><strong>HQ:</strong> {props.data.hq}</p>
           </div>
           <div className="media-right">
             <button className="button is-link" onClick={edit} >Edit</button>
           </div>                     
         </article>
       );
   }

   return renderNormal();
}

export default Company;