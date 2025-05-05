import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <>
      <Header name="Vivian Castilla"/>
      <main>
        <h1>I am a root component</h1>
      </main>
      <Footer year={2025}/>
    </>
  );
};

export default Root;