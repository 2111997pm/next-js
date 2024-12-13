import React from "react";
import { features } from "@/constant/ProvideService";
const Services = () => {
  return (
    <div className="container mx-auto py-8 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-r pr-6 last:border-none"
          >
            <div className="text-4xl text-teal-500">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
