import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import Layout from './Components/Layout/Layout';
import Lighting from "./Components/Lighting/Lighting";
import Portrait from "./Components/Portrait/Portrait";
import Landscape from "./Components/Landscape/Landscape";
import Equipment from "./Components/Equipment/Equipment";
import Techniques1 from "./Components/Techniques1/Techniques1";
import Techniques2 from "./Components/Techniques2/Techniques2";

function App() {
  let routs = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "blog", element: <Blog /> },
          {path : "blog/lighting" , element : <Lighting/>},
          {path: "blog/portrait" , element : <Portrait/>},
          {path: "blog/landscape" , element : <Landscape/>},
          {path: "blog/equipment" , element : <Equipment/>},
          {path: "blog/Techniques1" , element : <Techniques1/>},
          {path: "blog/Techniques2" , element : <Techniques2/>},
    
        { path: "*", element: <NotFound /> },
        { index: true, element: <Home /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routs}></RouterProvider>
    </>
  );
}

export default App;
