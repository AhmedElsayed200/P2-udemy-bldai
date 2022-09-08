const TopCategories = () => {
  return (
    <section class="container mx-auto mb-5">
      <p class="top-categories">Top categories</p>
      <div class="row">
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/design.jpg")}
            class="img-fluid"
            alt="design"
          />
          <p class="py-3 title-category">Design</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/development.jpg")}
            class="img-fluid"
            alt="development"
          />
          <p class="py-3 title-category">Development</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/marketing.jpg")}
            class="img-fluid"
            alt="marketing"
          />
          <p class="py-3 title-category">Marketing</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/it-software.jpg")}
            class="img-fluid"
            alt="it and software"
          />
          <p class="py-3 title-category">IT and Software</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/personal-development.jpg")}
            class="img-fluid"
            alt="personal development"
          />
          <p class="py-3 title-category">Personal Development</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/business.jpg")}
            class="img-fluid"
            alt="business"
          />
          <p class="py-3 title-category">Business</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/photography.jpg")}
            class="img-fluid"
            alt="photography"
          />
          <p class="py-3 title-category">Photography</p>
        </div>
        <div class="col-12 col-sm-4 col-lg-3">
          <img
            src={require("../../Resources/images/music.jpg")}
            class="img-fluid"
            alt="music"
          />
          <p class="py-3 title-category">Music</p>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
