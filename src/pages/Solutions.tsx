import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, UserCheck, CalendarCheck, RefreshCw, Target, Megaphone, Building, ShoppingCart, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import SEO from "@/components/SEO";

const services = [
  { icon: RefreshCw, title: "AI Lead Reactivation", description: "Revive old leads with personalized AI-driven automation.", link: "/services/lead-reactivation" },
  { icon: Phone, title: "AI Cold Calling", description: "Automated outreach that books meetings while you sleep.", link: "/services/cold-calling" },
  { icon: UserCheck, title: "AI Receptionist", description: "24/7 call handling, scheduling, and inquiry management.", link: "/services/receptionist" },
  { icon: CalendarCheck, title: "AI Appointment Setters", description: "Never miss a booking with intelligent AI scheduling.", link: "/services/appointment-setters" },
  { icon: Target, title: "AI Sales System", description: "Scrape, personalize, verify, and launch outbound campaigns on autopilot.", link: "/services/sales-system" },
  { icon: Megaphone, title: "Ads + AI Appointment Setter", description: "Targeted ads paired with AI booking for a fully automated pipeline.", link: "/services/ads-appointment-setters" },
];

const useCases = [
  { icon: Building, industry: "Real Estate", desc: "Automate lead follow-ups, open house scheduling, and property inquiries." },
  { icon: ShoppingCart, industry: "E-Commerce", desc: "Re-engage abandoned carts and automate customer support calls." },
  { icon: Briefcase, industry: "B2B Services", desc: "Scale outbound prospecting and streamline meeting scheduling." },
];

const Solutions = () => (
  <Layout>
    <SEO
      title="AI Solutions & Services | Appoint Funnels"
      description="Explore Appoint Funnels' AI solutions: AI Sales System, AI Cold Calling, AI Receptionist, AI Appointment Setters, Lead Reactivation, and Ads + AI Appointment Setter."
      canonical="https://appointfunnels.com/solutions"
    />
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Our Solutions"
          title="AI Solutions That Drive Real Results"
          description="Explore our complete suite of AI-powered tools designed to automate your customer acquisition pipeline from start to finish."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="container">
        <SectionHeading
          label="Use Cases"
          title="AI Across Industries"
          description="See how businesses in different industries leverage our AI solutions to drive growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const directions = [
              { x: -40, y: 0 },
              { x: 0, y: 40 },
              { x: 40, y: 0 },
            ];
            return (
              <motion.div
                key={uc.industry}
                initial={{ opacity: 0, ...directions[i] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-6 rounded-xl bg-card border border-border text-center card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <uc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{uc.industry}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Not Sure Which Solution is Right?</h2>
          <p className="text-muted-foreground mb-8">Let's chat. We'll help you find the perfect AI solution for your business.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
