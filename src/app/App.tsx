import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { Comparison } from "./components/Comparison";
import { Features } from "./components/Features";
import { Problems } from "./components/Problems";
import { FAQ } from "./components/FAQ";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <StatsStrip />
      <Comparison />
      <Features />
      <Problems />
      <FAQ />
      <BackToTop />
    </div>
  );
}