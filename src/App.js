import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Products from "./pages/products";
import MainNav from "./components/mainNav";
import RouteLayout from "./pages/routeLayout.js";
import ErrorPage from "./pages/error";
import ProductDetails from "./pages/productDetails";

//Other older version using JSX code

// const createRoute = createRoutesFromElements([<Route>
//   <Route path="/" element={<Homepage />} />
//   <Route path="products" element={<Products />} />
// </Route>]);
// const router = createBrowserRouter(createRoute)

// creates paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
