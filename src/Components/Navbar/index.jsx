const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="menu-3lines">
        <img
          src={require("../../Resources/images/menu_3lines.png")}
          alt="menu"
        />
      </div>
      <div className="udemy-logo">
        <img
          src={require("../../Resources/images/udemy_logo.png")}
          alt="udemy logo"
        />
      </div>
      <div className="categories-navbar">Categories</div>
      <div className="search-navbar-container">
        <form>
          <button type="submit" className="search-btn">
            <img
              src={require("../../Resources/images/search.png")}
              alt="search"
            />
          </button>
          <input
            type="search"
            name="search-navbar"
            id="searchNavBar"
            className="search-navbar"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <div className="business-navbar">Udemy Business</div>
      <div className="teach-navbar">Teach on Udemy</div>
      <div className="cart-navbar">
        <img
          src={require("../../Resources/images/shopping_cart.png")}
          alt="cart"
        />
      </div>
      <div className="right-sec-navbar">
        <div className="login-navbar">Log in</div>
        <div className="signup-navbar">Sign up</div>
        <div className="language-navbar">
          <img
            src={require("../../Resources/images/language_icon.png")}
            alt="choose language"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
