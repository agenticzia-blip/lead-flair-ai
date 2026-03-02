import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Results-Driven", desc: "We measure success by the growth we deliver to our clients." },
  { icon: Users, title: "Client-First", desc: "Every solution is tailored to your unique business needs." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve with cutting-edge AI technology." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do." },
];

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="About Us"
          title="Helping Businesses Scale with AI"
          description="Appoint Funnels was founded with a single mission: to help businesses leverage cutting-edge AI tools that automate and optimize customer acquisition processes."
        />
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            We believe that every business, regardless of size, should have access to the same powerful AI tools that Fortune 500 companies use. Our suite of services — from lead reactivation to AI-powered appointment setting — are designed to eliminate manual bottlenecks and supercharge your sales pipeline.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Our team of AI specialists, sales strategists, and engineers work together to build solutions that don't just automate — they optimize. We continuously refine our systems to deliver better results, more conversions, and higher ROI for our clients.
          </motion.p>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="container">
        <SectionHeading label="Our Values" title="What Drives Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border text-center card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
