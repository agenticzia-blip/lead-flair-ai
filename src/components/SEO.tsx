import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const BASE_KEYWORDS =
  "appointfunnels, appoint funnels, appoint funnel, appointfunnel, appoint-funnels, appointfunnels ai, appointfunnels agency, appointfunnels automation, appointfunnels ai automation, appointfunnels ai agents, appointfunnels outbound ai, appointfunnels support ai, appointfunnels usa, appointfunnels uk, appointfunnels official, appointfunnels platform, appointfunnels crm, appointfunnels systems, appointfunnels solutions, appointfunnels digital, appointfunnels tech, appointfunnels software, appointfunnels chatbot, appointfunnels calling agent, appointfunnels voice ai, appointfunnels outbound system, appointfunnels lead generation, appointfunnels sales automation, appointfunnels booking system, appointfunnels appointment system, appoint funnels company, appoint funnels agency, appoint funnels team, appointfunnels services, appointfunnels consulting";

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({ title, description, keywords, canonical }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("keywords", keywords ? `${keywords}, ${BASE_KEYWORDS}` : BASE_KEYWORDS);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (canonical) {
      setLink("canonical", canonical);
      setMeta("og:url", canonical, "property");
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEO;
