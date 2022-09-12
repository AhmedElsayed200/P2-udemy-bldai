const AddToCart = ({ price }) => {
  return (
    <div id="addToCartHeader" className="text-white md:hidden">
      <div id="courseCostHeader" className="text-5xl font-bold mb-3">
        {price}
      </div>
      <button
        id="addTocCartBtnHeader"
        className="container text-center p-3 bg-midViolet hover:bg-darkViolet text-lg font-bold mb-4"
      >
        Add to cart
      </button>
      <div className="text-sm text-center mb-2">
        30-Day Money-Back Guarantee
      </div>
      <div className="text-sm text-center mb-4">Full Lifetime Access</div>
      <div className="container flex mx-auto w-4/5 underline justify-between pb-5 cursor-pointer">
        <div>Share</div>
        <div>Gift this course</div>
        <div>Apply Coupon</div>
      </div>
    </div>
  );
};

export default AddToCart;
