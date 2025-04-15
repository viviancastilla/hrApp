import {useState} from "react";
import {book} from "./booksData";
import BookCard from "./BooksCard";

const BookList = () => {
    const [booksData, setBooksData] = useState(book);
    const [searchValue, setSearchValue] = useState("");

    const eventHandler = (id) => {
        console.log("read more button was clicked", id);
    };
    const toggleStock = (id) => {
        const updatedArray = booksData.map((book) => 
            book.id === id? {...book, inStock: !book.inStock} : book)
        console.log("stock button was clicked", id);
        setBooksData(updatedArray);
        console.log("stock button was clicked", id);
    };

    const toggleFavorite = (id) => {
        setBooksData((prevState) => 
        prevState)
        console.log("favorite button was clicked", id);
    };

    const searchHandle = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <>
        <h1>Books catalog</h1>
        <label htmlFor="search">Search</label>
        <input 
            type="text" 
            id="search" 
            name="search" 
            value={searchValue} 
            onChange={searchHandle}
        />

        <p>You search word is: {searchValue}</p>

        <div className="boxes">
            {booksData.map((book) => (
                <BookCard 
                key={book.id} 
                {...book} 
                onEventhandler= {eventHandler(book.id)}
                onToggleStock={()=> toggleStock(book.id)}
                onToggleFavorite={()=> toggleFavorite(book.id)}
                />
            ))} 
            </div>
        </>
    );
};

export default BookList;