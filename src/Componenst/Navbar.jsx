import { NavLink } from "react-router";

function Navbar() {
  const navClass = ({ isActive }) =>
    `px-5 py-3 rounded-xl transition ${
      isActive ? "bg-gray-200 text-black" : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="h-20 border-b flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-800 text-white rounded-xl flex items-center justify-center font-bold">
            L
          </div>

          <span className="text-2xl font-bold">Logo</span>
        </div>

        <div className="w-px h-8 bg-gray-200" />

        <div className="flex gap-2">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/testimony" className={navClass}>
            Testimony
          </NavLink>

          <NavLink to="/faq" className={navClass}>
            FAQ
          </NavLink>
        </div>
      </div>

      <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;
