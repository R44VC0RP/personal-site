export const SITE_URL = "https://ryan.ceo";
export const SITE_NAME = "Ryan Vogel";
export const SITE_TITLE = "Ryan Vogel — Founding Developer at OpenCode";
export const SITE_DESCRIPTION =
  "Ryan Vogel is a founding developer at OpenCode and founder of Inbound, programmable email infrastructure for developers.";

export const SOCIAL_LINKS = {
  github: "https://github.com/R44VC0RP",
  x: "https://x.com/ryanvogel",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
