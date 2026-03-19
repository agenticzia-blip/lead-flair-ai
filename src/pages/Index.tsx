import { Link } from "react-router-dom";
import Cal from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Phone, UserCheck, CalendarCheck, RefreshCw, Target, Megaphone, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Scale Your Business with<br />
              AI-Driven Funnels
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Leverage AI to streamline your processes, automate outreach, and drive exponential growth without increasing headcount.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-border">
        <div className="container py-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs font-semibold tracking-widest uppercase text-primary mb-6"
          >
            Trusted by Innovative Companies
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-muted-foreground">
            {["ZAPIER", "BOLT", "STACKBLITZ", "TOPVIEW AI", "BASE44", "LOVABLE"].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 0.5, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-sm font-semibold tracking-wider"
              >
                {name}
              </motion.span>
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 100 }}
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
            ].map((item, i) => {
              const directions = [
                { x: -40, y: 0 },
                { x: 0, y: 40 },
                { x: 40, y: 0 },
              ];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, ...directions[i] }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA with Embedded Calendar */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-10">
              Schedule a free consultation and discover how AI can 10x your customer acquisition.
            </p>
            <div className="rounded-2xl border border-primary/20 glow-border bg-card overflow-hidden" style={{ minHeight: 600 }}>
              <Cal
                calLink="zia-consult-ai/appointfunnels"
                config={{
                  layout: "month_view",
                  theme: "dark",
                }}
                style={{ width: "100%", height: "100%", minHeight: 600, overflow: "auto" }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our AI-powered solutions."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "What is Appoint Funnels?", a: "Appoint Funnels is an AI-powered business growth platform that automates lead generation, appointment setting, cold calling, and customer engagement — so you can scale faster without adding headcount." },
                { q: "How does the AI Appointment Setter work?", a: "Our AI engages your leads across email, SMS, and chat, finds mutually convenient times, sends confirmations and reminders, and handles rescheduling — all automatically." },
                { q: "What industries do you serve?", a: "We work with businesses across healthcare, real estate, financial services, SaaS, professional services, and more. If your business relies on appointments or lead conversion, our AI solutions can help." },
                { q: "How quickly can I get started?", a: "Most clients are fully onboarded within 48–72 hours. Our team handles the setup, integration, and training so you can start seeing results fast." },
                { q: "Do I need any technical knowledge?", a: "Not at all. Our solutions are fully managed — we handle the technical side so you can focus on running your business." },
                { q: "Can the AI integrate with my existing CRM?", a: "Yes! We integrate with all major CRMs including Salesforce, HubSpot, GoHighLevel, Zoho, and more." },
                { q: "What kind of ROI can I expect?", a: "Our clients typically see a 300% average ROI increase, with 10x faster lead response times and significant reductions in customer acquisition costs." },
                { q: "Is there a free trial or consultation?", a: "Yes — we offer a free 30-minute strategy consultation where we'll analyze your current sales process and show you exactly how AI can help." },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <AccordionItem value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
