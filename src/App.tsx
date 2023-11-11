import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import Places from "./pages/Places";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "places",
    element: <Places />,
    errorElement: <ErrorPage/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
