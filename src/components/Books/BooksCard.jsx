import { useState } from "react";
import "./Books.css";


const BooksCard = ({title, author, price, genre, inStock, isFavorite, onEventHandler, id, onToggleStock, onToggleFavorite, isEditing, newPrice, priceChange, ...rest}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const [newPrice, setNewPrice] = useState(price);
    //console.log(rest);
    const eventHandler = () => {
        console.log("You clicked 'Add wishlist' button is clicked");
    };

    const handleSaves = () => {
        onPriceChange()
        setIsEditing(!isEditing);
    }

   /*const [isFavorite, setIsFavorite] = useState(false);

    const clickHandler = () => {
        setIsFavorite(!isFavorite);
        console.log("heart was clicked");
    };*/

    return(
        <div className="booksCard">
            <div className="bookCard-header">
                <p
                    className={inStock ? "stock" : "stock outOf"}
                    onClick={() => onToggleStock(id)}
                >
                    {inStock ? "In stock" : "Out of Stock"}
                </p>
                <h2>{title} </h2>
                <p className="favIcon" onClick={onToggleFavorite}>
                    {isFavorite ? "♥️" : "♡"}
                </p>
                <p>{author}</p>
                <p className="genre">{genre}</p>
            </div>
            <div className="bookCard-content">
                {isEditing ? (
                    <input 
                        type="text" 
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        /> ): (
                        <p className="price">{price}€</p>
                    )}
            </div>
            <div>
            <p className="price">{price}€</p>
            </div>
            <div className="bookCard-footer">
            <button onClick={onEventHandler}>See more</button>
            {!inStock && <button onClick={eventHandler}>Add to Wishlist</button>}
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit"}</button>

            {isEditing ? (
                <button onCLick={handleSaves}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            )}
        </div>
    </div>
    );

export default BooksCard;