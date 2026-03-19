import { Megaphone } from "lucide-react";
import ServicePage from "@/pages/ServicePage";

const AdsAppointmentSetters = () => (
  <ServicePage
    icon={Megaphone}
    title="Ads + AI Appointment Setter"
    subtitle="Combine high-converting ad campaigns with AI-powered appointment setting to fill your calendar with qualified leads on autopilot."
    description="Our Ads + AI Appointment Setter service merges paid advertising with intelligent automation. We run targeted ad campaigns across platforms like Google, Facebook, and Instagram to generate leads, then our AI instantly engages those leads — qualifying them, answering questions, and booking appointments directly into your calendar. No manual follow-up, no missed opportunities."
    benefits={[
      "Done-for-you ad campaigns on Google, Facebook & Instagram",
      "AI instantly engages and qualifies every lead",
      "Automated appointment booking directly into your calendar",
      "Smart follow-ups for leads who don't book immediately",
      "Real-time campaign analytics and ROI tracking",
      "Continuous ad optimization through AI-driven insights",
    ]}
    howItWorks={[
      { step: "Launch Targeted Ads", desc: "We create and run high-converting ad campaigns tailored to your ideal customer profile." },
      { step: "AI Captures & Qualifies", desc: "Incoming leads are instantly engaged by AI — answering questions and qualifying them in real-time." },
      { step: "Appointments Booked", desc: "Qualified leads are booked directly into your calendar with confirmations and reminders sent automatically." },
      { step: "Optimize & Scale", desc: "AI analyzes performance data to continuously improve ad targeting and conversion rates." },
    ]}
    testimonial={{
      quote: "We went from spending thousands on ads with no follow-up to booking 40+ qualified appointments per month — completely hands-free.",
      name: "Rachel Torres",
      company: "Founder, BrightPath Financial",
    }}
  />
);

export default AdsAppointmentSetters;
