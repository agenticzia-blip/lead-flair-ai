import { RefreshCw } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const LeadReactivation = () => (
  <ServicePage
    icon={RefreshCw}
    title="AI Lead Reactivation"
    subtitle="Revive old leads with AI-driven automation that re-engages past customers and brings them back to your sales funnel."
    description="Our AI Lead Reactivation system analyzes your existing database of cold and unresponsive leads, then crafts personalized outreach sequences to re-engage them. Using advanced natural language processing, the system identifies the optimal timing, channel, and messaging for each contact — turning forgotten leads into active opportunities."
    benefits={[
      "Reactivate cold leads with personalized AI messages",
      "Increase lead conversion rates without manual effort",
      "Save time and increase revenue by targeting unresponsive contacts",
      "AI-optimized timing and messaging for maximum engagement",
      "Seamless integration with your existing CRM",
      "Detailed analytics and reporting on reactivation campaigns",
    ]}
    testimonial={{
      quote: "We recovered over $200,000 in revenue from leads we'd given up on. The AI reactivation system is a game changer.",
      name: "Sarah Johnson",
      company: "CEO, GrowthMax Realty",
    }}
  />
);

export default LeadReactivation;
