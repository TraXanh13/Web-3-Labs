import CompanyLogo from './CompanyLogo.jsx';
import {useState} from 'react';

const Company = (props) => {
  const [editing, setEditing] = useState(false);

  const edit = () => {
    setEditing(true);
  };
  const save = () => {
    setEditing(false);
    let temp = count +1;
    setCount(temp);
    console.log('temp='+temp+' count='+count);
  };

  const [count, setCount] = useState(0);
  console.log("render for " + props.data.name + " count="+count);

  const renderEdit = () => {
    return (
      <article className="box media ">
        <CompanyLogo symbol={props.data.symbol} />
        <div className="media-content">
          <h2><input type="text" className="input"
            defaultValue={props.data.name} />{count}</h2>
          <p>
            <strong>Symbol:</strong> {props.data.symbol}
          </p>
          <p>
            <strong>Sector:</strong>
            <input type="text" className="input"
              defaultValue={props.data.sector} />
          </p>
          <p>
            <strong>HQ:</strong>
            <input type="text" className="input"
            defaultValue={props.data.hq} />
          </p>
        </div>
        <div className="media-right">
          <button className="button is-info" onClick={save}>
            Save
          </button>
        </div>
      </article>
    );
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

  if (editing) {
    return renderEdit();
  } else {
    return renderNormal();
  }
}

export default Company;