import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Stats from "../components/Stats";
import CustomerReviews from "@/components/CustomerReview";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import TrendingProduct from "@/components/TrendingProduct";
import Category from "@/components/Category";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Category />
      <FeaturedProducts />
      <Services />
      <Cta />
      <TrendingProduct />
      <Brands />
      <Faq />
      <CustomerReviews />
    </>
  );
}
