import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackSection } from "@/components/stack-section";
import { Stats } from "@/components/stats";
import {
  ClientStrip,
  Engagement,
  Industries,
  Services,
  Why,
  Work,
} from "@/components/sections";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  serviceType: [
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI & Machine Learning",
    "DevOps & CloudOps",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ClientStrip />
        <Services />
        <Stats />
        <Industries />
        <Engagement />
        <Work />
        <StackSection />
        <Why />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
