import { Children } from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
    const {Children} = props;
    return (
        <div className="min-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-2 flex flex-col justify-between">
            {Children}
            </div>
    );
};

const Header = (props) => {
    const {image} = props
    return (
        <a href="#">
                    <img src={image} 
                    alt="product" 
                    className="p-8 rounded-t-lg"/>
                </a>
    );
};

const Body = (props) => {
    const {Children,name} = props; 
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-white"> 
               {title}
            </h5>
            <p className="text-s text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere omnis sit illum voluptatibus perspiciatis.
            </p>
        </a>
    </div>
    );
};

const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">{price}</span>
                    <button className="bg-blue-600"> Add to cart</button>
                </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct;