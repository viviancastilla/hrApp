import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BooksList from "./Books/BooksList";

const App = () => {
  return (
    <>
      <Header name="Vivian Castilla"/>
      <main>
        <BooksList/>
      </main>
      <Footer year={2025}/>
    </>
  );
};

export default App
