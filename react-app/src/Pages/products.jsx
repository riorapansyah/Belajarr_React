import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const product = [
    {
        id: 1,
        name: "jacket baru",
        price: "Rp 1.500.000",
        image: "/images/jacket-1.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis qui, vitae dolore enim ipsum asperiores!"
    },
    {
        id: 2,
        name: "jacket terkini",
        price: "Rp 1.000.000",
        image: "/images/jacket-1.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis qui, vitae dolore enim ipsum asperiores!"
    },
    {
        id: 3,
        name: "jacket brand",
        price: "Rp 500.000",
        image: "/images/jacket-1.jpg",
        description: "ini adalah jacket bagus"
    }
];

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
           
            {Products.map((product) => (
                 <CardProduct>
                 <CardProduct.Header image={product.image} />
                 <CardProduct.Body name={product.name}>
                   {product.description}                                                    
                 </CardProduct.Body>
                 <CardProduct.Footer price={product.price} />
             </CardProduct>
            ))}
        </div>
    );
};

export default ProductsPage;