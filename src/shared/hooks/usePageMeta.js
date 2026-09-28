import { useEffect } from "react";
import { SITE_NAME, routeMeta } from "@/shared/data/seo";
import { SITE_URL } from "@/shared/config";

const OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, name] = selector.replace(/^meta\[|\]$/g, "").replace(/"/g, "").split("=");
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta(path) {
  useEffect(() => {
    const meta = routeMeta(path);
    const url = meta.noindex ? SITE_URL : `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[name="robots"]', "content", meta.noindex ? "noindex,follow" : "index,follow");
    setLink("canonical", url);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:image"]', "content", OG_IMAGE);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('meta[name="twitter:image"]', "content", OG_IMAGE);
  }, [path]);
}
