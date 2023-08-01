import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Collection from "./Collections/Collection";
import ErrorPage from "./ErrorPage";

const Router = () => {
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/collection",
      element: <Collection />,
      errorElement: <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;