export const SITE_URL = "https://ryan.ceo";
export const SITE_NAME = "Ryan Vogel";
export const SITE_TITLE = "Ryan Vogel — Software Engineer & Founder";
export const SITE_DESCRIPTION =
  "Ryan Vogel is a software engineer, founder, and developer-tool creator working on OpenCode and building Inbound, programmable email infrastructure for developers.";

export const SOCIAL_LINKS = {
  github: "https://github.com/R44VC0RP",
  x: "https://x.com/ryanvogel",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
