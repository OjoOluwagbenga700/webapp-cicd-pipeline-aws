import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Programs />
      <CTA />
    </div>
  );
};

export default Index;