"use client";
import Image from "next/image";

const Category = () => {
  return (
    <div className="container mx-auto bg-white p-4 my-5">
      <h1 className="text-4xl font-bold  mb-10">Categories</h1>

      <div className="flex justify-center">
        <Image
          src="/category.png"
          alt="Descriptive Alt Text"
          width={1024}
          height={144}
        />
      </div>
    </div>
  );
};

export default Category;
