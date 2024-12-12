import CartItem from "../../components/CartItem";

const Cart = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {/* {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => <CartItem key={product.id} product={product} />)
      )} */}
    </div>
  );
};

export default Cart;
