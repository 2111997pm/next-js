import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Stats from "../components/Stats";
import CustomerReviews from "@/components/CustomerReview";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <CustomerReviews />
    </>
  );
}
