import { useEffect } from "react";

export function useSEO({ title, description, image, path, noindex = false }) {
  useEffect(() => {
    const full = title ? `${title} | Lotus USA Inc.` : "Lotus USA Inc. | Secure. Compliant. Mission Ready.";
    document.title = full;
    const set = (attr, key, val) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", val);
    };
    const url = `https://www.lotususainc.com${path || ""}`;
    if (description) set("name", "description", description);
    set("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    set("property", "og:title", full);
    set("property", "og:type", "website");
    set("property", "og:url", url);
    if (description) set("property", "og:description", description);
    if (image) set("property", "og:image", image);
    set("name", "twitter:card", "summary_large_image");
    set("name", "twitter:title", full);
    if (description) set("name", "twitter:description", description);
    if (image) set("name", "twitter:image", image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", url);
  }, [title, description, image, path, noindex]);
}
