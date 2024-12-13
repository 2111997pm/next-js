"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { reviews } from "../constant/review";

export default function CustomerReviews() {
  return (
    <div className="container mx-auto py-12 my-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Customers Review
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white rounded-lg shadow-md border border-gray-300 p-6 flex flex-col">
              <div className="flex justify-between">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 mb-4"
                />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${
                        index < Math.floor(review.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {review.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{review.review}</p>
              <div className="flex items-center"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
