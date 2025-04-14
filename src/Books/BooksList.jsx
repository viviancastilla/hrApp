import {useState} from "react";
import {books} from "./booksData";
import BookCard from "./BooksCard";

const BookList = () => {
    const [booksData, setBooksData] = useState(books)

    return(
        <>
        <h1>Books catalog</h1>
        <div className="boxes">
            {books.map((book) => (
                <BookCard key={book.id} {...book} />
            ))} 
            </div>
        </>
    );
};

export default BookList;