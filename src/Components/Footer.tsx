const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <div className="logo">
            <img src="./src/assets/logo-text.png" alt=""></img>
          </div>

          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="social-links">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        <div>
          <h4>PRODUCT</h4>
          <p>Home</p>
          <p>Technologies</p>
          <p>Projects</p>
        </div>

        <div>
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>

        <div>
          <h4>LEGAL</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <div className="copyright">© 2026 Dev Stack. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
