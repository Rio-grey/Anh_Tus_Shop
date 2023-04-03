const Product = () => {
  return (
    <a href="/detail" className="block mb-16">
      <img
        alt=""
        src="iphone11.png"
        className="object-cover w-[160px] h-[160px] mx-auto mb-5"
      />
      <h3 className="text-[14px] leading-[14px] mb-[27px]">
        iPhone 11 64GB I Chính hãng VN/A
      </h3>
      <div className="flex gap-x-[10px] mb-2">
        <span className="text-[#D70018] leading-[18px]">10.790.000 ₫</span>
        <span className="text-[#707070] leading-5">18.000.000 ₫</span>
      </div>
      <div className="flex items-baseline gap-x-1">
        <div className="">
          <img src="star.png" alt="" className="inline shrink-0" />
          <img src="star.png" alt="" className="inline shrink-0" />
          <img src="star.png" alt="" className="inline shrink-0" />
          <img src="star.png" alt="" className="inline shrink-0" />
          <img src="star.png" alt="" className="inline shrink-0" />
        </div>
        <span className="text-xs leading-[18px]">72 đánh giá</span>
      </div>
    </a>
  );
};

export default Product;
