import Banner from "../components/Banner";
import Product from "../components/Products";

const Homepage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-2xl mb-[11px] leading-10 text-[#444444]">
          ĐIỆN THOẠI NỔI BẬT NHẤT
        </h1>
        <div className="grid grid-cols-7 gap-4 mb-32">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
