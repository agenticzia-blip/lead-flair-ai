import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, UserCheck, CalendarCheck, RefreshCw, Target, Megaphone, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: RefreshCw,
    title: "AI Lead Reactivation",
    description: "Revive old leads with AI-driven automation that re-engages past customers and brings them back to your sales funnel.",
    link: "/services/lead-reactivation",
  },
  {
    icon: Phone,
    title: "AI Cold Calling",
    description: "Leverage AI-powered calling systems to reach potential clients and book meetings automatically.",
    link: "/services/cold-calling",
  },
  {
    icon: UserCheck,
    title: "AI Receptionist",
    description: "Replace traditional receptionists with AI-powered systems that answer calls and handle inquiries 24/7.",
    link: "/services/receptionist",
  },
  {
    icon: CalendarCheck,
    title: "AI Appointment Setters",
    description: "Our AI appointment setters book meetings with your leads, freeing up your time and ensuring no opportunities are missed.",
    link: "/services/appointment-setters",
  },
  {
    icon: Target,
    title: "AI Sales System",
    description: "End-to-end outbound engine — scrape leads, personalize outreach, verify data, and launch campaigns automatically.",
    link: "/services/sales-system",
  },
  {
    icon: Megaphone,
    title: "Ads + AI Appointment Setter",
    description: "Run targeted ads and let AI instantly qualify leads and book appointments into your calendar.",
    link: "/services/ads-appointment-setters",
  },
];

const stats = [
  { value: "300%", label: "Average ROI Increase" },
  { value: "10x", label: "Faster Lead Response" },
  { value: "24/7", label: "Always Available" },
  { value: "50K+", label: "Leads Reactivated" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden hero-bg">
        <div className="container relative z-10 py-16 md:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Scale Your Business with<br />
              AI-Driven Funnels
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              Leverage AI to streamline your processes, automate outreach, and drive exponential growth without increasing headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
              >
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-center"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-border">
        <div className="container py-10">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Trusted by Innovative Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-muted-foreground">
            {["ZAPIER", "BOLT", "STACKBLITZ", "TOPVIEW AI", "BASE44", "LOVABLE"].map((name) => (
              <span key={name} className="text-sm font-semibold tracking-wider opacity-50">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Our Services"
            title="AI-Powered Solutions for Every Business"
            description="From lead reactivation to appointment setting, our AI tools handle the heavy lifting so you can focus on closing deals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="container">
          <SectionHeading
            label="Why AI?"
            title="The Future of Business Growth"
            description="AI isn't just a trend — it's a fundamental shift in how businesses acquire and retain customers."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Respond to leads in seconds, not hours. AI never sleeps." },
              { icon: Shield, title: "Consistent Quality", desc: "Every interaction follows your best practices, every time." },
              { icon: TrendingUp, title: "Scalable Growth", desc: "Handle 10 or 10,000 leads without hiring more staff." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-12 rounded-2xl border border-primary/20 glow-border bg-card"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation and discover how AI can 10x your customer acquisition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
