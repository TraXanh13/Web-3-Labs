/* eslint-disable react/prop-types */
const SingleFav = props => {
    const movieImg = "https://image.tmdb.org/t/p/w342" + props.movie.poster;

    return(
        <div className="column is-1">
            <img src={movieImg} alt={props.movie.title}></img>
        </div>
    )
}

export default SingleFav;