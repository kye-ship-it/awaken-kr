import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import UserDoubts from "./components/UserDoubts";
import ValueProposition from "./components/ValueProposition";
import ProblemCards from "./components/ProblemCards";
import CostSection from "./components/CostSection";
import InvitationTimeline from "./components/InvitationTimeline";
import MasterTrainer from "./components/MasterTrainer";
import FounderSection from "./components/FounderSection";
import GlobalLeaders from "./components/GlobalLeaders";
import Testimonials from "./components/Testimonials";
import CTAForm from "./components/CTAForm";
import FAQ from "./components/FAQ";
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
        <InvitationTimeline />
        <div className="flex justify-center py-4">
          <div className="w-[60px] h-px bg-gold/30" />
        </div>
        <MasterTrainer />
        <FounderSection />
        <GlobalLeaders />
        <Testimonials />
        <div className="flex justify-center py-4">
          <div className="w-2 h-2 rotate-45 bg-gold/40" />
        </div>
        <CTAForm />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
