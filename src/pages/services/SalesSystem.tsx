import { Target } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const SalesSystem = () => (
  <ServicePage
    icon={Target}
    title="AI Sales System"
    subtitle="Scrape, personalize, verify, and launch — an end-to-end AI-powered outbound sales engine that fills your pipeline on autopilot."
    description="Our AI Sales System automates the entire outbound sales process. It scrapes targeted leads from multiple sources, builds hyper-personalized outreach sequences for each prospect, verifies contact data to ensure deliverability, and launches multi-channel campaigns — all without lifting a finger. The system continuously learns from engagement data to optimize messaging and targeting for maximum conversions."
    benefits={[
      "Automated lead scraping from multiple data sources",
      "AI-powered personalization for every prospect",
      "Built-in email and phone verification to ensure data quality",
      "Multi-channel campaign launch (email, SMS, LinkedIn)",
      "Real-time analytics and campaign performance tracking",
      "Continuous optimization through AI learning loops",
    ]}
    howItWorks={[
      { step: "Define Your ICP", desc: "Tell us your ideal customer profile — industry, company size, job titles, and location." },
      { step: "AI Scrapes & Verifies Leads", desc: "Our system finds prospects matching your criteria and verifies their contact information." },
      { step: "Personalized Outreach Created", desc: "AI crafts unique, personalized messages for each lead based on their profile and company data." },
      { step: "Campaign Launched", desc: "Multi-channel campaigns go live automatically, with smart follow-ups and A/B testing built in." },
    ]}
    testimonial={{
      quote: "The AI Sales System filled our pipeline with 150+ qualified leads in the first month. The personalization is incredibly accurate.",
      name: "David Park",
      company: "VP Sales, TechBridge Solutions",
    }}
  />
);

export default SalesSystem;
