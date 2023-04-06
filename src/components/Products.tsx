import { Link } from "react-router-dom";
import { IProduct } from "../models";

type Props = {
  data: IProduct;
};

const Product = ({ data }: Props) => {
  return (
    <Link to={`product/${data.id}`} className="flex flex-col mb-16">
      <img
        alt=""
        src={data?.images[0].base_url}
        className="object-cover w-[160px] h-[160px] mx-auto mb-5"
      />
      <h3 className="font-medium text-center mb-[27px]">{data.name}</h3>
      <div className="mt-auto">
        <div className="flex mb-2 gap-x-5">
          <span className="text-[#D70018] leading-[18px]">{data.price} ₫</span>
          <span className="text-[#707070] leading-5">
            {data.original_price} ₫
          </span>
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
      </div>
    </Link>
  );
};

export default Product;
