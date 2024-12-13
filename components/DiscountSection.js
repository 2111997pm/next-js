import React from "react";

export default function DiscountSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-start p-6 bg-gray-50 min-h-screen mt-5 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Discount Code Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Discount Codes
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Enter your coupon code if you have one
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 w-full sm:w-auto">
            Apply Coupon
          </button>
        </div>
        <button className="px-4 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 w-full sm:w-auto">
          Continue Shopping
        </button>
      </div>

      <div className="w-full lg:w-1/3 bg-teal-50 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-medium">Sub Total</span>
          <span className="text-gray-800 font-semibold">Rs. 3050</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-medium">Shipping</span>
          <span className="text-gray-800 font-semibold">Rs. 0.00</span>
        </div>
        <hr className="border-dashed border-gray-300 mb-4" />
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-900 font-bold">Grand Total</span>
          <span className="text-gray-900 font-bold">Rs. 3050</span>
        </div>
        <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
