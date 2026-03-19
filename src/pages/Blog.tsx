import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    title: "How AI is Revolutionizing Lead Generation in 2026",
    excerpt: "Discover the latest AI-driven strategies that are transforming how businesses find and convert leads.",
    date: "Feb 28, 2026",
    category: "AI Insights",
  },
  {
    title: "5 Ways AI Cold Calling Outperforms Traditional Methods",
    excerpt: "Learn why AI-powered cold calling delivers higher conversion rates at a fraction of the cost.",
    date: "Feb 20, 2026",
    category: "Cold Calling",
  },
  {
    title: "The ROI of AI Appointment Setting: A Case Study",
    excerpt: "A real-world look at how one company increased bookings by 340% using AI appointment setters.",
    date: "Feb 12, 2026",
    category: "Case Study",
  },
  {
    title: "Why Every Business Needs an AI Receptionist",
    excerpt: "24/7 availability, zero wait times, and consistent quality — the case for AI receptionists.",
    date: "Feb 5, 2026",
    category: "AI Receptionist",
  },
  {
    title: "Lead Reactivation: The Untapped Gold Mine in Your CRM",
    excerpt: "Most businesses are sitting on thousands of dollars of unrealized revenue. Here's how to unlock it.",
    date: "Jan 28, 2026",
    category: "Lead Reactivation",
  },
  {
    title: "Implementing AI in Your Sales Process: A Step-by-Step Guide",
    excerpt: "A practical guide to integrating AI tools into your existing sales workflow without disruption.",
    date: "Jan 20, 2026",
    category: "Guide",
  },
];

const Blog = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Blog & Resources"
          title="AI Insights & Industry Trends"
          description="Stay ahead of the curve with our latest articles, case studies, and guides on AI-powered business growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => {
            // Alternate animations: from-left, from-bottom, from-right pattern
            const directions = [
              { x: -30, y: 0 },
              { x: 0, y: 30 },
              { x: 30, y: 0 },
            ];
            const dir = directions[i % 3];
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, ...dir }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border card-hover group cursor-pointer"
              >
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
