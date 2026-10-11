import Hero from "@/app/components/landing/Hero";
import Section1 from "@/app/components/landing/Section1";
import Offers from "@/app/components/landing/Offers";
import MediaReel from "@/app/components/landing/MediaReel";
import Stats from "@/app/components/landing/Stats";
import Practice from "@/app/components/landing/Practice";
import ExpertsPreview from "@/app/components/landing/ExpertsPreview";
import Partners from "@/app/components/landing/Partners";
import CloseCta from "@/app/components/landing/CloseCta";
import Footer from "@/app/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7f8] text-black">
      <Hero />
      <Section1 />
      <Offers />
      <MediaReel />
      <Stats />
      <Practice />
      <ExpertsPreview />
      <Partners />
      <CloseCta />
      <Footer />
    </div>
  );
}
