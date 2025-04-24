import {createBrowserRouter, RouteProvider} from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About/>
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
