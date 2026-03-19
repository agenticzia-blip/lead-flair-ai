import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Appoint Funnels?",
    a: "Appoint Funnels is an AI-powered business growth platform that automates lead generation, appointment setting, cold calling, and customer engagement — so you can scale faster without adding headcount.",
  },
  {
    q: "How does the AI Appointment Setter work?",
    a: "Our AI engages your leads across email, SMS, and chat, finds mutually convenient times, sends confirmations and reminders, and handles rescheduling — all automatically. It integrates directly with your calendar and CRM.",
  },
  {
    q: "What industries do you serve?",
    a: "We work with businesses across healthcare, real estate, financial services, SaaS, professional services, and more. If your business relies on appointments or lead conversion, our AI solutions can help.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most clients are fully onboarded within 48–72 hours. Our team handles the setup, integration, and training so you can start seeing results fast.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Not at all. Our solutions are fully managed — we handle the technical side so you can focus on running your business. You'll get a simple dashboard to monitor performance.",
  },
  {
    q: "How does AI Cold Calling work?",
    a: "Our AI uses advanced voice technology to conduct natural-sounding conversations with prospects. It dials, qualifies leads, handles objections, and books meetings — all without human intervention.",
  },
  {
    q: "What's the difference between the AI Receptionist and AI Appointment Setter?",
    a: "The AI Receptionist handles all incoming calls and inquiries 24/7, routing them appropriately. The AI Appointment Setter proactively reaches out to leads to schedule meetings. Many clients use both together for full coverage.",
  },
  {
    q: "Can the AI integrate with my existing CRM?",
    a: "Yes! We integrate with all major CRMs including Salesforce, HubSpot, GoHighLevel, Zoho, and more. We also support custom API integrations.",
  },
  {
    q: "What kind of ROI can I expect?",
    a: "Our clients typically see a 300% average ROI increase, with 10x faster lead response times and significant reductions in customer acquisition costs. Results vary by industry and scale.",
  },
  {
    q: "Is there a free trial or consultation?",
    a: "Yes — we offer a free 30-minute strategy consultation where we'll analyze your current sales process and show you exactly how AI can help. You can book one directly on our website.",
  },
  {
    q: "How does the Ads + AI Appointment Setter work?",
    a: "We run targeted ad campaigns on Google, Facebook, and Instagram to generate leads, then our AI instantly engages those leads — qualifying them and booking appointments into your calendar automatically.",
  },
  {
    q: "What happens if the AI can't handle a question?",
    a: "Our AI is designed to seamlessly hand off complex queries to your human team. You'll be notified immediately, and the AI provides full context so your team can pick up right where it left off.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our AI-powered solutions. Can't find what you're looking for? Reach out to our team."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="rounded-xl border border-border bg-card px-5"
                  >
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

export default FAQ;
