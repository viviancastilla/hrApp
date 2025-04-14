import { useState } from "react";
import "./Books.css";


const BooksCard = ({title, author, price, genre, inStock, isFavorite, ...rest}) =>{

    console.log(rest);

   /*const [isFavorite, setIsFavorite] = useState(false);

    const clickHandler = () => {
        setIsFavorite(!isFavorite);
        console.log("heart was clicked");
    };*/

    return(
        <div className="booksCard">
            <h2>{title} </h2>
            <p>{isFavorite ? "<3" : ":)"}</p>
            <p>{author}</p>
            <p>{price}€</p>
            <p>{genre}</p>
            <p>{inStock? "In Stock" : "Out of Stock"}
            </p>
            {!inStock && <button>Add to Whishlist</
            button>}
        </div>
    );
};