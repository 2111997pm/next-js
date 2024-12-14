import Image from "next/image";
export default function Card({
  image,
  title,
  description,
  price,
  oldPrice,
  discount,
  rating,
  addToCart,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 mt-10 flex flex-col">
      <div className="relative">
        <Image
          className="dark:invert rounded-lg w-full h-72 object-contain"
          src={image}
          alt={title}
          width={612}
          height={400}
        />

        <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.885a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.97-2.885a1 1 0 00-1.176 0l-3.97 2.885c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.26 9.785c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-2 flex-grow">
        <div className="flex items-center space-x-2">
          <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-md">
            {rating} ★
          </span>
        </div>
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-baseline space-x-2 mt-2">
          <span className="text-lg font-bold text-green-600">{price}</span>
          <span className="text-sm line-through text-gray-500">{oldPrice}</span>
          <span className="text-sm text-red-500">{discount}</span>
        </div>
      </div>
      <button
        className="mt-auto w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
        onClick={addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
}
