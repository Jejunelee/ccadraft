import Header from "@/app/about/components/Header";
import Team from "./components/Team";
import Footer from "@/app/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7f8]">
      <Header />
      <Team />
      <Footer />
    </div>
  );
}