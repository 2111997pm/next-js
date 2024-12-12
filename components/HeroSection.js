export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 py-16 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Build Your Dream Product
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We offer cutting-edge solutions to help you create, innovate, and
            grow your business. Let's work together to make your vision a
            reality.
          </p>
          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700"
            >
              Explore
            </a>
            <a
              href="#"
              className="px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/hero.png"
            alt="Hero Section"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
