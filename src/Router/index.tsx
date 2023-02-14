import App from "../App";
import { TopBreeds, CatSpecs } from "../components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {

  const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "/topBreeds", element: <TopBreeds/> },
    { path: "/catSpecs", element: <CatSpecs/> }
  ]);

  return (
    <RouterProvider router={router}/>
  )
};

export default Router;