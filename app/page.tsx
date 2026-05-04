import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import UserDoubts from "./components/UserDoubts";
import ValueProposition from "./components/ValueProposition";
import ProblemCards from "./components/ProblemCards";
import CostSection from "./components/CostSection";
import ProgramOverview from "./components/ProgramOverview";
import RevealSection from "./components/RevealSection";
import Testimonials from "./components/Testimonials";
import CTAForm from "./components/CTAForm";
import FounderSection from "./components/FounderSection";
import GlobalLeaders from "./components/GlobalLeaders";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-[1440px] mx-auto overflow-x-hidden">
        <HeroSection />
        <SocialProof />
        <UserDoubts />
        <ValueProposition />
        <ProblemCards />
        <div className="h-px w-[80px] mx-auto bg-white/[0.08]" />
        <CostSection />
        <ProgramOverview />
        <RevealSection />
        <FounderSection />
        <GlobalLeaders />
        <Testimonials />
        <div className="flex justify-center py-4">
          <div className="w-2 h-2 rotate-45 bg-gold/40" />
        </div>
        <CTAForm />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
