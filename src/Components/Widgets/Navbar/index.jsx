import { Link } from "react-router-dom";
import menu3linesImg from "../../../Resources/images/menu_3lines.png";
import udemyLogoImg from "../../../Resources/images/udemy_logo.png";
import searchImg from "../../../Resources/images/search.png";
import cartImg from "../../../Resources/images/shopping_cart.png";
import languageImg from "../../../Resources/images/language_icon.png";
import { useState } from "react";

const Navbar = ({ searchForCourse }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForCourse(searchKey);
  };

  return (
    <nav id="navbar">
      <div className="menu-3lines">
        <img src={menu3linesImg} alt="menu" />
      </div>
      <Link to="/">
        <div className="udemy-logo">
          <img src={udemyLogoImg} alt="udemy logo" />
        </div>
      </Link>
      <div className="categories-navbar">Categories</div>
      <div className="search-navbar-container">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="search-btn">
            <img src={searchImg} alt="search" />
          </button>
          <input
            type="search"
            name="search-navbar"
            id="searchNavBar"
            className="search-navbar"
            placeholder="Search for anything"
            value={searchKey}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="business-navbar">Udemy Business</div>
      <div className="teach-navbar">Teach on Udemy</div>
      <div className="cart-navbar">
        <img src={cartImg} alt="cart" />
      </div>
      <div className="right-sec-navbar">
        <div className="login-navbar">Log in</div>
        <div className="signup-navbar">Sign up</div>
        <div className="language-navbar">
          <img src={languageImg} alt="choose language" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
