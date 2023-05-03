import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go to <Link to="/products">Products page</Link>
      </p>
      <button onClick={handleNavigate}>Go to Products</button>
    </>
  );
};

export default Homepage;
