import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Collection from "./Collections/Collection";
import ErrorPage from "./ErrorPage";
import JewelryCollection from "./Collections/JewelryCollection";
import MenCollection from "./Collections/MenCollection";
import WomenCollection from "./Collections/WomenCollection";
import AllCollection from "./Collections/AllCollection";
import ProductPage from "./Collections/ProductPage/ProductPage";
import CartPage from "./Store/CartPage";

const Router = () => {
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "collection",
      element: <Collection />,
      children: [
        { index: true, element: <AllCollection />},
        { path: "jewelrycollection", element: <JewelryCollection /> },
        { path: "mencollection", element: <MenCollection /> },
        { path: "womencollection", element: <WomenCollection /> },
        { path: "all", element: <AllCollection /> },
      ],
      errorElement: <ErrorPage />
    },
    {
      path: "/product/:id",
      element: <ProductPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/cart",
      element: <CartPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/error",
      element: <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;