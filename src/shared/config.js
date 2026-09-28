import { resolveSiteUrl } from "@/shared/data/seo";

export const SITE_URL = resolveSiteUrl(import.meta.env.VITE_SITE_URL);
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";
