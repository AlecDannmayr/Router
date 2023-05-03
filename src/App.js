import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Products from "./pages/products";

// creates paths
const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
