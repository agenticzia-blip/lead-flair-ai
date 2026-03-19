import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Starter",
    price: "₹13,999",
    period: "",
    description: "Perfect for small businesses looking for a professional online presence.",
    features: [
      "10 Pages Website Design",
      "Lead Form Setup",
      "Basic SEO",
      "Website Delivery & Training",
      "Google Business Listing",
      "2 Years Hosting",
      "1 Month Free Professional Emails",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹19,999",
    period: "",
    description: "Everything in Starter plus advanced features to grow your business.",
    features: [
      "Everything in Starter",
      "Full Website Design",
      "AI Chatbot Integration",
      "5 Years Hosting",
      "Lifetime Management",
      "Solar Watt Calculator",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹1,00,000",
    period: "",
    description: "Premium package with guaranteed results and lifetime support.",
    features: [
      "Full SEO Ranking",
      "GEO Ranking",
      "Lifetime Hosting",
      "Google Review AI Agent",
      "3+ New Clients Guaranteed",
    ],
    highlighted: false,
  },
];

const Pricing = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Pricing"
          title="Transparent, Simple Pricing"
          description="Choose the plan that fits your business. All plans include setup, onboarding, and ongoing optimization."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const directions = [
              { x: -40, y: 0 },
              { x: 0, y: 30, scale: 0.95 },
              { x: 40, y: 0 },
            ];
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, ...directions[i] }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 80 }}
                className={`p-8 rounded-xl border card-hover ${
                  plan.highlighted
                    ? "bg-card border-primary/40 glow-border relative"
                    : "bg-card border-border"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-opacity ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
