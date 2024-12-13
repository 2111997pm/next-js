import Image from "next/image";

export default function Cta() {
  return (
    <div className="min-h-screen flex items-center justify-center from-teal-700 to-green-800 p-6 ">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6 md:p-12 relative overflow-hidden cta-bg-image">
        <div className="text-center md:text-left md:w-1/2 z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
            pellentesque feugiat gravida tincidunt lobortis mi. Nisl
            sollicitudin in dictumst elementum amet nulla.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md">
            Buy Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            className="dark:invert"
            src="/cta2.png"
            alt="logo"
            width={612}
            height={552}
          />
        </div>

        <div className="absolute top-6 right-6 bg-teal-200 text-teal-800 font-bold text-xl py-2 px-4 rounded-full">
          60% off
        </div>
      </div>
    </div>
  );
}
