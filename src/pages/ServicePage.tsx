import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  howItWorks?: { step: string; desc: string }[];
  testimonial?: { quote: string; name: string; company: string };
}

const ServicePage = ({ icon: Icon, title, subtitle, description, benefits, howItWorks, testimonial }: ServicePageProps) => (
  <Layout>
    {/* Hero */}
    <section className="py-20 md:py-28 hero-bg">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Description */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-card/50 border-y border-border">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-foreground">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    {howItWorks && (
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-10 text-center">How It Works</h2>
          <div className="space-y-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Testimonial */}
    {testimonial && (
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container max-w-2xl text-center">
          <blockquote className="text-xl text-foreground font-medium italic mb-6">"{testimonial.quote}"</blockquote>
          <p className="text-primary font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </section>
    )}

    {/* CTA */}
    <section className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">Book a free consultation to see how this service can transform your business.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Book a Free Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default ServicePage;
