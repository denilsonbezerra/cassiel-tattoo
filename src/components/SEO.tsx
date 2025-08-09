import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function SEO({ title, description, image = "/og-cassiel.jpg" }: SEOProps) {
  useEffect(() => {
    const url = window.location.href;
    document.title = title;
    setMeta("name", "description", description);
    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", url);
    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", image);

    // Canonical
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    // JSON-LD (LocalBusiness / Person)
    const scriptId = "seo-jsonld-cassiel";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    const json = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tatuador Cassiel",
      jobTitle: "Tattoo Artist",
      address: { "@type": "PostalAddress", addressLocality: "Fortaleza", addressCountry: "BR" },
      sameAs: [],
      url,
      telephone: "+55 85 8747-5079",
    };
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(json);
  }, [title, description, image]);
  return null;
}
