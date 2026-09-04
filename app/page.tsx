import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Choices from "../components/Choices";
import Recommendations from "../components/Recommendations";
import SearchCard from "../components/SearchCard";
import WhyIris from "../components/WhyIris";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Choices />

      <SearchCard />

      <Recommendations />

      <WhyIris />

      <Footer />
    </>
  );
}