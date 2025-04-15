import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BooksList from "./Books/BooksList";
import Box from "./Box/Box";

const App = () => {
  return (
    <>
      <Header name="Vivian Castilla"/>
      <main>
        <h1>REACT DEMO APP</h1>
        <div className="boxes">
          <Box
            fullName="Vivian Castilla"
            title="CEO"
            age="21"
            myAnimal="bunny"
          />
          <Box
            fullName="Barbara Castilla"
            title="Designer"
            age="24"
            myAnimal="pig"
          />
          <Box
            fullName="Jaime Castilla"
            title="Developer"
            age="26"
            myAnimal="cocodrile"
          />
          <Box
            fullName="Maribel Gonzalez"
            title="Designer"
            age="54"
            myAnimal="squirl"
            />
          <Box
            fullName="Jaime Canales"
            title="Developer"
            age="63"
            myAnimal="dog"
          />
        </div>
        <BooksList/>
      </main>
      <Footer year={2025}/>
    </>
  );
};

export default App
