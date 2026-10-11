import Header from "@/app/experts/components/Header"; // Import the Header component
import Footer from "@/app/components/landing/Footer";
import Section1 from "@/app/experts/components/Section1"
import HowItWorks from "@/app/experts/components/HowItWorks"
import ExpertsTeam from "@/app/experts/components/ExpertsTeam"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7f8]">
      <Header />
      <Section1 />
      <HowItWorks />
      <ExpertsTeam />
      <Footer />
    </div>
  );
}