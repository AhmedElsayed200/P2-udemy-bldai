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
    <section className="w-fit mx-auto px-32 mb-14">
      <p className="text-3xl font-bold mb-3">Top categories</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-3">
        <div>
          <img src={designImg} alt="design" />
          <p className="text-lg font-bold mt-2">Design</p>
        </div>
        <div>
          <img src={developmentImg} alt="development" />
          <p className="text-lg font-bold mt-2">Development</p>
        </div>
        <div>
          <img src={marketingImg} alt="marketing" />
          <p className="text-lg font-bold mt-2">Marketing</p>
        </div>
        <div>
          <img src={itSoftwareImg} alt="it and software" />
          <p className="text-lg font-bold mt-2">IT and Software</p>
        </div>
        <div>
          <img src={presonalDevelopmentImg} alt="personal development" />
          <p className="text-lg font-bold mt-2">Personal Development</p>
        </div>
        <div>
          <img src={businessImg} alt="business" />
          <p className="text-lg font-bold mt-2">Business</p>
        </div>
        <div>
          <img src={photographyImg} alt="photography" />
          <p className="text-lg font-bold mt-2">Photography</p>
        </div>
        <div>
          <img src={musicImg} alt="music" />
          <p className="text-lg font-bold mt-2">Music</p>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
