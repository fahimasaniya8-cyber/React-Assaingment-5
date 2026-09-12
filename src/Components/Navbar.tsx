const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./src/assets/logo-text.png" alt=""></img>
        
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
