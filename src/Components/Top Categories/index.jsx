const TopCategories = () => {
  return (
    <section className="container mx-auto mb-5">
      <p className="top-categories">Top categories</p>
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/design.jpg")}
            className="img-fluid"
            alt="design"
          />
          <p className="py-3 title-category">Design</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/development.jpg")}
            className="img-fluid"
            alt="development"
          />
          <p className="py-3 title-category">Development</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/marketing.jpg")}
            className="img-fluid"
            alt="marketing"
          />
          <p className="py-3 title-category">Marketing</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/it-software.jpg")}
            className="img-fluid"
            alt="it and software"
          />
          <p className="py-3 title-category">IT and Software</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/personal-development.jpg")}
            className="img-fluid"
            alt="personal development"
          />
          <p className="py-3 title-category">Personal Development</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/business.jpg")}
            className="img-fluid"
            alt="business"
          />
          <p className="py-3 title-category">Business</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/photography.jpg")}
            className="img-fluid"
            alt="photography"
          />
          <p className="py-3 title-category">Photography</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/music.jpg")}
            className="img-fluid"
            alt="music"
          />
          <p className="py-3 title-category">Music</p>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
