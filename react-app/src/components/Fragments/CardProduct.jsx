import { Children } from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow mx-5 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-5 rounded-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {title}
        </h5>
        <p className="text-s text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere
          omnis sit illum voluptatibus perspiciatis.
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 my-2 pb-5">
      <span className="text-xl font-bold text-black"> Rp {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
      <button className="bg-blue-600 text-white p-3 rounded-xl" onClick={() =>handleAddToCart(id)}> 
        Add to cart
        </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
