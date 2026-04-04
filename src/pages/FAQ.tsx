import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is Appoint Funnels?",
    answer:
      "Appoint Funnels is an AI-powered sales automation agency. We help businesses automate lead generation, appointment setting, cold calling, receptionist duties, and full outbound sales campaigns — all using cutting-edge AI technology.",
  },
  {
    question: "How does the AI Sales System work?",
    answer:
      "Our AI Sales System is a cold emailing engine that scrapes decision-makers from your target market, verifies their contact information, builds hyper-personalized outreach for each prospect, and launches multi-channel campaigns automatically. It continuously optimizes based on engagement data.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with businesses across many industries including SaaS, real estate, healthcare, financial services, home services, agencies, and more. If your business relies on appointments or lead generation, our AI solutions can help.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most clients start seeing qualified leads and booked appointments within the first 1–2 weeks of launch. Our AI systems work 24/7, so results compound quickly compared to traditional methods.",
  },
  {
    question: "Do I need any technical knowledge to use your services?",
    answer:
      "Not at all. We handle the entire setup, integration, and optimization. You simply define your ideal customer profile and we take care of the rest. You'll receive booked appointments directly in your calendar.",
  },
  {
    question: "What's included in the Ads + AI Appointment Setter service?",
    answer:
      "This service combines targeted paid advertising (Facebook, Google, etc.) with our AI appointment setter. We run the ads, capture the leads, and our AI instantly qualifies them and books appointments into your calendar — all on autopilot.",
  },
  {
    question: "How does AI Lead Reactivation work?",
    answer:
      "We take your existing database of old or cold leads and use AI-powered outreach sequences to re-engage them. Our system identifies the highest-intent prospects and nurtures them back into your sales pipeline.",
  },
  {
    question: "What makes your AI Cold Calling different from robocalls?",
    answer:
      "Our AI cold calling uses advanced conversational AI that sounds natural and adapts to each conversation in real-time. It's not a pre-recorded message — the AI listens, responds intelligently, handles objections, and books appointments seamlessly.",
  },
  {
    question: "Can I cancel or change my plan?",
    answer:
      "Yes, our plans are flexible. You can upgrade, downgrade, or cancel at any time. We believe in earning your business through results, not locking you into long-term contracts.",
  },
  {
    question: "How do you ensure lead quality and data accuracy?",
    answer:
      "Our AI Sales System includes built-in email and phone verification to ensure every contact is valid and deliverable. We also use multiple data sources for scraping to cross-reference and validate prospect information before any outreach begins.",
  },
];

const FAQ = () => (
  <Layout>
    {/* Hero */}
    <section className="py-20 md:py-28 hero-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our AI-powered services and how they can transform your business."
          />
        </motion.div>
      </div>
    </section>

    {/* FAQ Accordion */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => {
            const directions = [
              { x: -30, y: 0 },
              { x: 30, y: 0 },
              { x: 0, y: 30 },
            ];
            const dir = directions[i % 3];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, ...dir }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-card/50 border-t border-border">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a free consultation and we'll walk you through everything.
          </p>
          <a
            href="https://cal.com/zia-consult-ai/appointfunnels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
