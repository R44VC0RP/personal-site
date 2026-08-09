import { Metadata } from "next";
import Home from "./home";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "profile",
  },
};

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "@ryanvogel",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      about: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: "@ryanvogel",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      jobTitle: ["Software Engineer", "Founder", "Integration Specialist"],
      worksFor: {
        "@type": "Organization",
        name: "OpenCode",
        url: "https://opencode.ai",
      },
      sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.x],
      knowsAbout: [
        "Software engineering",
        "AI developer tools",
        "Email infrastructure",
        "Developer relations",
        "PostgreSQL",
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Home />
    </>
  );
}
