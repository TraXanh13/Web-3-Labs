/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import SingleFav from './SingleFav';

const FavoriteList = (props) => {
    return(
        <div className="columns is-multiline">
                {props.favMovies.map((m) => <SingleFav movie={m} key={m.id}/>)}
        </div>
    );
}

export default FavoriteList;