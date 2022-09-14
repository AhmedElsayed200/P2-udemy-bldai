import designImg from "../../../Resources/images/design.jpg";
import developmentImg from "../../../Resources/images/development.jpg";
import marketingImg from "../../../Resources/images/marketing.jpg";
import itSoftwareImg from "../../../Resources/images/it-software.jpg";
import presonalDevelopmentImg from "../../../Resources/images/personal-development.jpg";
import businessImg from "../../../Resources/images/business.jpg";
import photographyImg from "../../../Resources/images/photography.jpg";
import musicImg from "../../../Resources/images/music.jpg";

const TopCategories = () => {
  return (
    <section className="container w-5/6">
      <p className="top-categories">Top categories</p>
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={designImg} className="img-fluid" alt="design" />
          <p className="py-3 title-category">Design</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={developmentImg} className="img-fluid" alt="development" />
          <p className="py-3 title-category">Development</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={marketingImg} className="img-fluid" alt="marketing" />
          <p className="py-3 title-category">Marketing</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={itSoftwareImg}
            className="img-fluid"
            alt="it and software"
          />
          <p className="py-3 title-category">IT and Software</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img
            src={presonalDevelopmentImg}
            className="img-fluid"
            alt="personal development"
          />
          <p className="py-3 title-category">Personal Development</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={businessImg} className="img-fluid" alt="business" />
          <p className="py-3 title-category">Business</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={photographyImg} className="img-fluid" alt="photography" />
          <p className="py-3 title-category">Photography</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-3">
          <img src={musicImg} className="img-fluid" alt="music" />
          <p className="py-3 title-category">Music</p>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
