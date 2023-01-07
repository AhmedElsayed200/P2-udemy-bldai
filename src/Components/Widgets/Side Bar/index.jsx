import { useEffect } from "react";
import { handleScroll } from "../../../Resources/Assets";
import viedoPlayBtnIcon from "../../../Resources/SVGs/play-video-on-screen.svg";
import fileIcon from "../../../Resources/SVGs/file.svg";
import downloadableFileIcon from "../../../Resources/SVGs/product-downloadable.svg";
import infinityIcon from "../../../Resources/SVGs/infinity.svg";
import phoneIcon from "../../../Resources/SVGs/phone.svg";
import trophyIcon from "../../../Resources/SVGs/trophy.svg";

const SideBar = ({ selectedCourseSummary }) => {
  let discount =
    100 -
    (selectedCourseSummary?.price?.discount_price?.amount /
      selectedCourseSummary?.price?.list_price?.amount) *
      100;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="sideBarContainer"
      className="xs:hidden lg:block bg-white w-96 shadow absolute top-28 lg:right-28"
    >
      {/* course image */}
      <img
        id="sideBarImg"
        src={selectedCourseSummary?.image_750x422}
        alt={selectedCourseSummary?.title}
        className="w-11/12 mx-auto mb-4"
      />
      {/* course data */}
      <div className="px-4 py-5">
        {/* price */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-5xl font-bold">
            {selectedCourseSummary?.price?.discount_price?.price_string}
          </div>
          <div className="line-through text-lightGray text-xl">
            {selectedCourseSummary?.price?.list_price?.price_string}
          </div>
          <div className="text-lg">
            {discount.toFixed(2)}
            {"% off"}
          </div>
        </div>
        {/* buy or add to cart */}
        <button className="w-full h-16 bg-midViolet hover:bg-darkViolet text-lg text-white font-bold cursor-pointer mb-2">
          Add to cart
        </button>
        <button className="w-full h-16 border-2 border-black hover:bg-thinGray text-lg font-bold cursor-pointer mb-4">
          Buy now
        </button>
        <div className="text-sm text-center mb-4">
          30-Day Money-Back Guarantee
        </div>
        {/* course data */}
        <div className="text-lg font-bold mb-2">This course includes:</div>
        <div className="flex gap-3 mb-2 items-center">
          <img
            src={viedoPlayBtnIcon}
            alt="viedo play button"
            className="w-4 h-4"
          />
          {selectedCourseSummary?.content_info_short}
          {" on-demand video"}
        </div>
        <div className="flex gap-3 mb-2 items-center">
          <img src={fileIcon} alt="file" className="w-4 h-4" />
          {"2 articles"}
        </div>
        <div className="flex gap-3 mb-2 items-center">
          <img
            src={downloadableFileIcon}
            alt="downloadable file"
            className="w-4 h-4"
          />
          {"1 downloadable resource"}
        </div>
        <div className="flex gap-3 mb-2 items-center">
          <img src={infinityIcon} alt="infinity" className="w-4 h-4" />
          {"Full lifetime access"}
        </div>
        <div className="flex gap-3 mb-2 items-center">
          <img src={phoneIcon} alt="phone" className="w-4 h-4" />
          {"Access on mobile and TV"}
        </div>
        <div className="flex gap-3 mb-3">
          <img src={trophyIcon} alt="trophy" className="w-4 h-4" />
          {"Certificate of completion"}
        </div>
        <div className="flex justify-between font-bold">
          <div className="underline">Share</div>
          <div className="underline">Gift this course</div>
          <div className="underline">Apply Coupon</div>
        </div>
      </div>
      {/* other data */}
      <div className="p-4 border-t-2 border-lightGray">
        <div className="text-xl font-bold mb-2">Training 5 or more people?</div>
        <div className="mb-3">
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </div>
        <button className="w-full h-12 border-2 border-black hover:bg-thinGray font-bold cursor-pointer">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
};

export default SideBar;
