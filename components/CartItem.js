const CartItem = ({ product }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
