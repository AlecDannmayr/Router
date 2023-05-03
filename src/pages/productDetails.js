import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <>
    <h1>Products</h1>
    <p>{params.productId}</p>
    <Link to=".." relative="path">Go Back</Link>
    </>
  )
}

export default ProductDetails;
