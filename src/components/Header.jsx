import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className=" d-flex justify-content-between align-items-center mb-3 p-4 ">
      <div className="d-flex gap-2 align-items-center">
        <img src={"/vite.svg"} alt="" />
        <h2>Redux ToolKit</h2>
      </div>
      <nav className="d-flex align-items-center gap-3 text-decoration-none">
        <NavLink to={"/"}>SAYAÇ</NavLink>
        <NavLink to={"/crud"}>CRUD</NavLink>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="btn btn-info"
        >
          Tema Değiş
        </button>
      </nav>
    </header>
  );
};

export default Header;
