function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">
          Discover the vast expanses of <span className="hero__accent hero__accent--pink">space</span>
        </h1>
        <p className="hero__subtitle">
          Where the possibilities are <span className="hero__accent hero__accent--light-green">endless!</span>
        </p>
        <a className="hero__button button button--filled" href="#">Learn more</a>
        <div className="hero__illustration" aria-hidden="true">
          <div className="hero__orbit" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
