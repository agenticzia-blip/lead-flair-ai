import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Starter",
    price: "$497",
    period: "/month",
    description: "Perfect for small businesses getting started with AI automation.",
    features: [
      "1 AI Service of your choice",
      "Up to 500 contacts/month",
      "Basic analytics dashboard",
      "Email support",
      "Monthly performance review",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$997",
    period: "/month",
    description: "For growing businesses ready to scale their customer acquisition.",
    features: [
      "2 AI Services of your choice",
      "Up to 2,500 contacts/month",
      "Advanced analytics & reporting",
      "Priority support",
      "Weekly performance reviews",
      "CRM integration",
      "Custom AI voice/messaging",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large businesses with complex needs.",
    features: [
      "All 4 AI Services included",
      "Unlimited contacts",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support",
      "White-label options",
      "Custom AI training",
      "SLA guarantees",
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
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
