/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import SingleMovie from './SingleMovie';

const MovieList = (props) => {


    return(
        <ul className="columns is-multiline">
            {props.movies.map((m) => <SingleMovie movie={m} key={m.id} addFavMovie={props.addFavMovie}/>)}
        </ul>
    );
}

export default MovieList