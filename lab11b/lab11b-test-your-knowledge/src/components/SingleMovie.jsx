/* eslint-disable react/prop-types */
const SingleMovie = (props) => {
    const movieImg = "https://image.tmdb.org/t/p/w342" + props.movie.poster;

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
                        <button className="button card-footer-item" value={props.movie.id} onClick={props.addFavMovie}>
                            <span className="icon is-small">
                                <i className="fas fa-heart">❤️</i>
                            </span>
                        </button>  
                    </footer>
            </div>
        </li>
    )
}

export default SingleMovie;