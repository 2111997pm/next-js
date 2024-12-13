"use client";

import Card from "./Card";
import React, { useEffect } from "react";
import useApi from "@/utils/apiUse";
import Loader from "./Loader";

export default function TrendingProduct() {
  const URL = "https://fakestoreapi.com";
  const { data, error, loading, fetchData } = useApi(URL);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchData("/products", "GET");
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    getData();
  }, [fetchData]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  console.log(data !== null && data);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4">
        <h2 className="text-4xl font-bold">Most Popular Products</h2>
        <button className="mt-2 sm:mt-0 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data !== null &&
          data
            .slice(0, 8)
            .map((product) => (
              <Card
                key={product.id}
                image={product.image}
                title={product.category}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating.rate}
              />
            ))}
      </div>
    </div>
  );
}
//
