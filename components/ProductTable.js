"use client";
import { products } from "../constant/products";
import { useCart } from "@/context/cartContext";

export default function ProductTable() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  return (
    <div className="mt-10">
      <div className="w-full mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-green-100 text-gray-800">
                <th className="text-left p-4 min-w-[200px]">PRODUCT DETAILS</th>
                <th className="text-left p-4 min-w-[100px]">PRICE</th>
                <th className="text-left p-4 min-w-[120px]">QUANTITY</th>
                <th className="text-left p-4 min-w-[120px]">SHIPPING</th>
                <th className="text-left p-4 min-w-[120px]">SUBTOTAL</th>
                <th className="text-left p-4 min-w-[100px]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan={6}>
                    <h2 className="text-4xl font-bold text-center mt-4">
                      Cart is empty
                    </h2>
                  </td>
                </tr>
              )}
              {cartItems.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="flex items-center p-4 space-x-4 min-w-[200px]">
                    <img
                      src={product.image}
                      alt={product.category}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <p className="font-medium">{product.category}</p>
                      <p className="text-sm text-gray-500">
                        Title: {product.title}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 min-w-[100px]">{product.price}</td>
                  <td className="p-4 min-w-[120px]">
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 min-w-[120px]">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td className="p-4 min-w-[100px]">
                    <button
                      className="text-teal-600 hover:text-teal-800"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
