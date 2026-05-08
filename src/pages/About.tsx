import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ceoPhoto from "@/assets/ceo-photo.png";

const values = [
  { icon: Target, title: "Results-Driven", desc: "We measure success by the growth we deliver to our clients." },
  { icon: Users, title: "Client-First", desc: "Every solution is tailored to your unique business needs." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve with cutting-edge AI technology." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do." },
];

const About = () => (
  <Layout>
    <SEO
      title="About Appoint Funnels | AI Automation Agency Founded by Ziauddin Shah"
      description="Learn about Appoint Funnels — an AI automation agency helping businesses scale with AI sales systems, AI receptionists, and appointment setters. Founded by CEO Ziauddin Shah."
      canonical="https://appointfunnels.com/about"
    />
    {/* CEO Section */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-sm mx-auto">
              <img src={ceoPhoto} alt="Ziauddin Shah - Founder & CEO" className="w-full aspect-square object-cover" />
              <div className="bg-black text-white text-center py-3 font-display font-semibold">
                Founder & CEO
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Ziauddin Shah</h2>
            <p className="text-lg font-semibold text-muted-foreground">Founder & CEO</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed italic">
              <p>"My journey into AI-driven business solutions started with a simple belief: every business, regardless of size, deserves access to cutting-edge technology that can transform their growth trajectory."</p>
              <p>"At Appoint Funnels, we're not just building AI tools—we're creating opportunities. Our mission is to democratize AI technology and make it accessible, affordable, and effective for businesses worldwide."</p>
              <p>"I'm passionate about helping entrepreneurs and business owners scale their operations without the overwhelming complexity. Let's build something amazing together."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="container">
        <SectionHeading
          label="About Us"
          title="Helping Businesses Scale with AI"
          description="Appoint Funnels was founded with a single mission: to help businesses leverage cutting-edge AI tools that automate and optimize customer acquisition processes."
        />
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We believe that every business, regardless of size, should have access to the same powerful AI tools that Fortune 500 companies use. Our suite of services — from lead reactivation to AI-powered appointment setting — are designed to eliminate manual bottlenecks and supercharge your sales pipeline.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Our team of AI specialists, sales strategists, and engineers work together to build solutions that don't just automate — they optimize. We continuously refine our systems to deliver better results, more conversions, and higher ROI for our clients.
          </motion.p>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-card/50 border-y border-border">
      <div className="container">
        <SectionHeading label="Our Values" title="What Drives Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const directions = [
              { x: -30, y: 0 },
              { x: 0, y: 30 },
              { x: 0, y: 30 },
              { x: 30, y: 0 },
            ];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, ...directions[i] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 rounded-xl bg-card border border-border text-center card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
