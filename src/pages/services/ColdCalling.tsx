import { Phone } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const ColdCalling = () => (
  <ServicePage
    icon={Phone}
    title="AI Cold Calling"
    subtitle="Leverage AI-powered calling systems to reach potential clients and book meetings automatically."
    description="Our AI Cold Calling solution uses advanced voice AI to conduct natural-sounding conversations with prospects. The system handles the entire outreach process — from dialing to qualifying leads to booking meetings — all without human intervention. It learns from every interaction to continuously improve conversion rates."
    benefits={[
      "Automated call scheduling and outreach",
      "AI voice recognition and personalized interactions",
      "No more manual cold calling — let AI handle the outreach",
      "Increase efficiency and scale without human resources",
      "Natural-sounding conversations that build rapport",
      "Real-time call analytics and performance tracking",
    ]}
    howItWorks={[
      { step: "Upload Your List", desc: "Import your prospect list and define your ideal customer profile." },
      { step: "AI Crafts the Pitch", desc: "Our AI creates personalized scripts based on each prospect's profile." },
      { step: "Automated Outreach", desc: "The system places calls, qualifies leads, and books meetings." },
      { step: "Review & Optimize", desc: "Monitor results and let the AI refine its approach over time." },
    ]}
  />
);

export default ColdCalling;
