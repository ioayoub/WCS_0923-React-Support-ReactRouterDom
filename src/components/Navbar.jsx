import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between p-4 bg-black text-white">
      <NavLink to="/">MyWebSite_</NavLink>
      <ul className="flex flex-row gap-8">
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
