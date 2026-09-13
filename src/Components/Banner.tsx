import bannerStack from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            Build Your Ideal
            <br />
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options. Compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="banner-buttons">
            <a href="#technologies" className="explore-button">
              Explore Technologies
            </a>

            <button className="learn-button">Learn More</button>
          </div>
        </div>
        <div className="bannerStack">
          <img src={bannerStack} alt="Banner"></img>
        </div>
      </div>
      <hr className="divider" />
    </section>
  );
};

export default Banner;
