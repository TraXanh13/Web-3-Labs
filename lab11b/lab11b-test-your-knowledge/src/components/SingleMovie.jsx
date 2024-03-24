/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const SingleMovie = (props) => {
    const movieImg = "https://image.tmdb.org/t/p/w342" + props.movie.poster;

    const handleAddMovie = () => {
        props.addFavMovie(props.movie)
    }

    return(
        <li className="column is-one-fifth-desktop is-half-tablet">
            <div className="card">
                    <div className="card-image">
                        <figure className="image is-2by3">
                            <img src={movieImg}></img>
                        </figure>
                    </div>

                    <div className="card-content has-text-centered content-rectangle">
                        <h2>{props.movie.title}</h2>
                        <p className="is-size-7">{props.movie.tagline}</p>
                    </div>

                    <footer className="card-footer">
                        <button className="button card-footer-item" onClick={handleAddMovie}>
                                <FontAwesomeIcon className="icon is-small" icon={faHeart} />
                        </button>  
                    </footer>
            </div>
        </li>
    )
}

export default SingleMovie;