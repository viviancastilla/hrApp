import { useState } from "react";
import "./Books.css";


const BooksCard = ({title, author, price, genre, inStock, isFavorite, onToggleStock, onToggleFavorite, ...rest}) =>{

    //console.log(rest);
    const eventHandler = () => {
        console.log("You clicked 'Add wishlist' button is clicked");
    };

   /*const [isFavorite, setIsFavorite] = useState(false);

    const clickHandler = () => {
        setIsFavorite(!isFavorite);
        console.log("heart was clicked");
    };*/

    return(
        <div className="booksCard">
            <h2>{title} </h2>
            <p onClick={onToggleFavorite}>{isFavorite ? "<3" : ":)"}</p>
            <p>{isFavorite ? "<3" : ":)"}</p>
            <p>{author}</p>
            <p>{price}€</p>
            <p>{genre}</p>
            <p onClick={() => onToggleStock (id)}></p>
            <p>{inStock? "In Stock" : "Out of Stock"}
            </p>
            {!inStock && <button onClick={eventHandler}>Add to Wishlist</button>}
        </div>
    );
};

export default BooksCard;