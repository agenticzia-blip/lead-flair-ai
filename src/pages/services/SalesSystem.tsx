import { Mail } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const SalesSystem = () => (
  <ServicePage
    icon={Mail}
    title="AI Sales System"
    subtitle="Scrape decision-makers, personalize cold emails, verify contacts, and launch campaigns — your complete AI-powered cold email outbound engine."
    description="Our AI Sales System is a full cold emailing engine built for B2B outbound. It scrapes decision-makers from your target market, verifies every email to ensure deliverability, crafts hyper-personalized cold emails tailored to each prospect's role and company, and launches automated campaigns at scale. The system continuously learns from open rates, replies, and engagement data to optimize subject lines, messaging, and targeting for maximum conversions."
    benefits={[
      "Scrape decision-makers from LinkedIn, Apollo, and other sources",
      "AI-powered email personalization for every prospect",
      "Built-in email verification to ensure deliverability",
      "Automated cold email campaign launch with smart follow-ups",
      "Real-time analytics — opens, clicks, replies, and conversions",
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
