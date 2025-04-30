import {createBrowserRouter, RouterProvider} from "react-router";
import {useState} from "react";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BooksList";
import AddBookList from "./pages/AddBookForm";
import AddBookForm from "./pages/AddBookForm";


const App = () => {
  const [booksData, setBooksData] = useState(books);

  const addBookHandler = (newBook) => {
    setBooksData{(prev) => []}
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/books",
      element: <BookList />,
    },
    {
      path: "/add",
      elelment: <AddBookForm onAddBook={addBookForm}/>,
    }
  ]);
  return 
    <RouterProvider router={router} />;
};

export default App;
