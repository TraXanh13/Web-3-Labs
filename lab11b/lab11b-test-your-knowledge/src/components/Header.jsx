/* eslint-disable react/prop-types */
import FavoriteList from "./FavoriteList"

const Header = (props) => {
    return (
        <section className="favorites">
            <h1 className="title is-4">Favorites</h1>
            <FavoriteList favMovies={props.favMovies} />
        </section>
    )
}

export default Header;