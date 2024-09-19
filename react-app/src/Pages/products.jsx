import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const product = [
  {
    id: 1,
    name: "jacket baru",
    price: 1500000,
    image: "/images/jacket-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis qui, vitae dolore enim ipsum asperiores!",
  },
  {
    id: 2,
    name: "jacket terkini",
    price: 1000000,
    image: "/images/jacket-1.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis qui, vitae dolore enim ipsum asperiores!",
  },
  {
    id: 3,
    name: "jacket brand",
    price: 500000,
    image: "/images/jacket-1.jpg",
    description: "ini adalah jacket bagus",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex">
          {product.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-black ml-5 mb-2"> Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // Ubah 'products' menjadi 'product'
                const selectedProduct = product.find(
                  (prod) => prod.id === parseInt(item.id)
                );
                return (
                  <tr key={item.id}>
                    <td>{selectedProduct.name}</td>
                    <td>
                      {""}
                      {selectedProduct.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {" "}
                      {(item.qty * selectedProduct.price).toLocaleString(
                        "id-ID",
                        { style: "currency", currency: "IDR" }
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
