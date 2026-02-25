import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Register</Link> {" | "}
      <Link to="/login">Login</Link> {" | "}
      <Link to="/profile">Profil</Link>

    </nav>
  );
};

export default Navbar;
