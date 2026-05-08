import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";

const BookCall = () => (
  <Layout>
    <SEO
      title="Book a Free AI Strategy Call | Appoint Funnels"
      description="Schedule a free 30-minute consultation with Appoint Funnels. Discover how our AI sales systems can scale your business."
      canonical="https://appointfunnels.com/book-call"
    />
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <SectionHeading
            title="Book a Free Consultation"
            description="Pick a date and time that works for you — we'll walk you through how AI can scale your business."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl border border-border bg-card overflow-hidden"
          style={{ minHeight: 550 }}
        >
          <Cal
            calLink="zia-consult-ai/appointfunnels"
            config={{
              layout: "month_view",
              theme: "dark",
            }}
            style={{ width: "100%", height: "100%", minHeight: 550, overflow: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default BookCall;
