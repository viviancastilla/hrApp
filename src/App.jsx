import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {use, useState} from "react";
import { books } from "./data/booksData";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import BookList from "./components/Books/BooksList";
import AddBookForm from "./pages/AddBookForm/AddBookForm";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import PersonList from "./pages/PersonList";


const App = () => {
  const [booksData, setBooksData] = useState(books);
  const [employees, setEmployees] = useState([]);

  const addBookHandler = (newBook) => {
    setBooksData((prev) => [
      ...prev,
      {...newBook, id: Date.now(), inStock: true, isFavorite: false},
    ]);
  };

  const addEmployeeHandler = (newEmployee) => {
    setEmployees((prev) => [
      ...prev,
      { ...newEmployee, id: Date.now() },
    ]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About/>
        },
        {
          path:"/books",
          element: (
            <BookList booksData={booksData} setBooksData={setBooksData}/>
          ),
        },
        {
          path: "/add",
          element: <AddBookForm onAddBook={addBookHandler}/>,
        },
        {
          path: "/employees",
          element: (
            <PersonList employees={employees} />
          ),
        },
        {
          path: "/add-employee",
          element: (
            <AddEmployee onAddEmployee={addEmployeeHandler} />
          ),
        },
        {
          index: true,
          element: <PersonList employees={employees} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
