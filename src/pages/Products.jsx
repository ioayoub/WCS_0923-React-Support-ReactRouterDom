import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Products() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1 className="text-4xl text-center my-16">Products page</h1>
      <ul className="flex flex-col text-center">
        {data.map((d) => (
          <li key={d.id}>
            <NavLink to={`/singleproduct/${d.id}`} className={"underline"}>
              {d.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
