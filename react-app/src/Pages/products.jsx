import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

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

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItems("email");
        localStorage.removeItems("password");
        window.location.href = "/login";
    };
    return (
       <>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
            <Button className="ml-5 bg-black" onClick={handleLogout}>
                Logout
            </Button>
        </div>
        <div className="flex justify-center py-5">        
            {Products.map((product) => (
                 <CardProduct key={product.id}>
                 <CardProduct.Header image={product.image} />
                 <CardProduct.Body name={product.name}>
                   {product.description}                                                    
                 </CardProduct.Body>
                 <CardProduct.Footer price={product.price} />
             </CardProduct>
            ))}
        </div>
        <div className="flex w-100 justify-center">
            <Counter></Counter>
        </div>
       </>
    );
};

export default ProductsPage;