import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGlobe, FaUserFriends, FaUserAstronaut, FaTruckPickup, FaShip, FaFilm } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import '../assets/styles/home.css';


const categories = ['films', 'people', 'planets', 'species', 'vehicles', 'starships'];

const Home = () => {
    const [favorites, setFavorites] = React.useState([] as Array<number>);

    React.useEffect(() => {
        localStorage.removeItem('favItem0')
        const storedFavArray = JSON.parse(localStorage.getItem('favourites') || '0');
        if (storedFavArray !== 0) {
            setFavorites([...storedFavArray])
        }
    },[]);

    const addFavourite = (index: number) => {
        let favArray = favorites;
        let addItem = true;

        favArray.forEach((item, key) => {
            if (Number(item) === index) {
                favArray.splice(key, 1);
                addItem = false;
            }
        });

        if (addItem) {
            favArray.push(index);
        }
        setFavorites([...favArray]);

        localStorage.setItem("favourites", JSON.stringify(favorites));
        let storage = localStorage.getItem('favItem' + index || '0');

        if (storage === null) {
            localStorage.setItem(('favItem' + index), JSON.stringify(categories[index]))
        } else {
            localStorage.removeItem('favItem' + index)
        }
    }

    const categoriesList = categories.map((category, index) => (
        <div key={index}>
            <Link to={`./${category}`}>
                <div className="category">
                    { category === 'films' && <FaFilm /> }
                    { category === 'planets' && <FaGlobe /> }
                    { category === 'people' && <FaUserFriends /> }
                    { category === 'species' && <FaUserAstronaut /> }
                    { category === 'vehicles' && <FaTruckPickup /> }
                    { category === 'starships' && <FaShip /> }

                    <span className="title">
                        {category}
                    </span>
                </div>
            </Link>
            <div className="favourite-icon" onClick={() => addFavourite(index)}>
                {
                    favorites.includes(index)
                    ? <FaHeart />
                    : <FiHeart />
                }
            </div>
        </div>
    ));


    return (
        <section className="container">
            <div className="categories_wrap">
                {categoriesList}
            </div>
        </section>
    )
}

export default Home;