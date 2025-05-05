import {useState} from "react";
import BookCard from "./BooksCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BookList = ({booksData, setBooksData}) => {
    //const [booksData, setBooksData] = useState(book);
    const [searchValue, setSearchValue] = useState("");

    const eventHandler = (id) => {
        console.log("read more button was clicked", id);
    };
    const toggleStock = (id) => {
        const updatedArray = booksData.map((book) => 
            book.id === id? {...book, inStock: !book.inStock} : book);
        /*console.log("stock button was clicked", id);
        setBooksData(updatedArray);
        console.log("stock button was clicked", id);*/
        setBooksData(updatedArray);
    };

    const toggleFavorite = (id) => {
        console.log("favorite button was clicked", id);
        setBooksData((prevState) => 
            prevState.map((book) =>
                book.id === id ? { ...book, isFavorite: !book.isFavorite} : book)
        );
    };

    const handlePriceChange = (id, newPrice) => {
        setBooksData((prevState) =>
            prevState.map((book)=>
            book.id === id ? {...book, price: parseFloat(newPrice) } : book
            )
        );
    };

    const searchHandle = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredBooks = booksData.filter((book) => {
        const search = searchValue.toLowerCase();
        return(
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search)
        );
    });

    return(
        <>
            <div className="books">
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
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard
                            key={book.id} 
                            {...book} 
                            onEventHandler={() => eventHandler(book.id)}
                            onToggleStock={toggleStock}
                            onToggleFavorite={()=> toggleFavorite(book.id)}
                            onPriceChange={() => handlePriceChange}
                        />
                    ))
                ) : (
                    <p>No matching bookd found. Try another search.</p>
                )}
            </div>
        </div>
    </>
    );
};

export default BookList;