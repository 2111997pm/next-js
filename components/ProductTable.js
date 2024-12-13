"use client";
import { products } from "../constant/products";

export default function ProductTable() {
  return (
    <div className="mt-10">
      <div className="w-full mx-auto px-4">
        {/* Responsive Table Wrapper */}
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
              {products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="flex items-center p-4 space-x-4 min-w-[200px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">
                        Color: {product.color} <br />
                        Size: {product.size}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 min-w-[100px]">{product.price}</td>
                  <td className="p-4 min-w-[120px]">
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded">
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 min-w-[120px]">{product.shipping}</td>
                  <td className="p-4 min-w-[120px]">{product.subtotal}</td>
                  <td className="p-4 min-w-[100px]">
                    <button className="text-teal-600 hover:text-teal-800">
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
