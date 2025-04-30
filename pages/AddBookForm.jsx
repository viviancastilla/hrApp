import {useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const AddBookForm = ({onAddBook}) => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        price: "",
        genre: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value,} = e.target;
        setFormData {(prev) => ({...prev, [name]: value})};
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {...fromData, price: parseFloat,(formData.price)};

        const newBook = (
            title,
            author,
            price: parseFloat(price),
            genre,
        )

        onAddBook(newBook);

        setTitle("");
        setAuthor("");
        setPrice("");
        setGenre("");
    };

    return (
        <>
        <Header name="Vivian Castilla"/>
        <main>
            <h1>Add new book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text" 
                        placeholder="Title" 
                        value={formData.title} 
                        onChange={(e)=>setTitle(e.target)}
                    />
                    <input 
                        placeholder="Author" 
                        value={formData.author} 
                        onChange={(e)=>setAuthor(e.target)}
                    /> 
                    <input 
                        placeholder="Price" 
                        value={form.price} 
                        onChange={(e)=>setPrice(e.price)}
                    /> 
                    <input 
                        placeholder="Genre" 
                        value={genre} 
                        onChange={(e)=>setGenre(e.genre)}
                    /> 
                </div>
    
                <div>
                <button type="submit">Add book</button>
                </div>
            
            </form>
        </main>
        <Footer year={2025}/>
    </>
    )
};

export default AddBookForm;