import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Contact Us"
            title="Let's Talk About Your Growth"
            description="Ready to scale your business with AI? Fill out the form or reach out directly — we'd love to hear from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell us about your business and goals..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" /> hello@appointfunnels.com
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" /> +1 (555) 123-4567
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" /> 123 Innovation Drive, San Francisco, CA
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-primary/20 glow-border">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">Book a Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer a live conversation? Schedule a 30-minute strategy call with our team.
                </p>
                <a href="https://cal.com/zia-consult-ai/appointfunnels" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
