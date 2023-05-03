import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <p>Go to <Link to="/products">Products page</Link></p>
    </>
  );
};

export default Homepage;
