import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SingleProduct() {
  const product = useLoaderData();

  console.log(product);
  return (
    <div>
      <h1 className="text-4xl text-center my-16">{product.title}</h1>
      <p className="w-2/4 mx-auto">{product.body}</p>
      <NavLink
        to="/products"
        className="block w-fit mx-auto bg-black p-4 text-white my-16"
      >
        Back to products
      </NavLink>
    </div>
  );
}

export default SingleProduct;
