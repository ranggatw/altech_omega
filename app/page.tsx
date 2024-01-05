import Slider from "@/components/Slider";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero key="hero" />
      <Slider key="slider" />
      <Features key="features" />
      <GetApp key="getApp" />
    </>
  );
}
