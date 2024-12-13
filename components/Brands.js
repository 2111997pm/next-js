import Image from "next/image";

const Brands = () => {
  return (
    <div className="container mx-auto bg-white p-4 my-10">
      <h1 className="text-4xl font-bold  mb-4">Popular Brands</h1>

      <div className="flex justify-center my-10">
        <Image
          src="/brand.png"
          alt="Descriptive Alt Text"
          width={1024}
          height={144}
        />
      </div>
    </div>
  );
};

export default Brands;
