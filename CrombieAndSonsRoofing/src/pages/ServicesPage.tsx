import Footer from "../components/layout/Footer";
import "./ServicesPage.css";
import ScrollReveal from "../components/animations/ScrollReveal";
import PageHero from "../components/layout/PageHero";
import { browseServicesNavSection, cleaningServicesSection, cleaningServiesContentCards, featuredServicesSection, howToChooseContentCards, howToChooseSection, materialComparisonSection, ourProcessContentCards, ourProcessSection, roofLeakRepairContentCards, servicesComparisonContentCards, servicesContactSection, servicesContentCards, servicesHero, sidingAndRepairsContentCards, soffitAndFasciaContentCards } from "../data/ServicesPageData";
import ContentCards from "../components/layout/ContentCards";
import Section from "../components/layout/Section";

export default function ServicesPage() {
  return (
    <main className="services-page">

      <PageHero {...servicesHero}/>

      <Section {...browseServicesNavSection}>
        <ScrollReveal x={-50} y={0}>
            <div className="services-anchor-links">
                <a href="#roofing-options" className="services-anchor-link">
                Roofing Options
                </a>
                <a href="#how-to-choose" className="services-anchor-link">
                How To Choose
                </a>
                <a href="#featured-services" className="services-anchor-link">
                Featured Services
                </a>
                <a href="#cleaning-services" className="services-anchor-link">
                Cleaning Services
                </a>
                <a href="#our-process" className="services-anchor-link">
                Our Process
                </a>
            </div>
            </ScrollReveal>
      </Section>

      <Section {...materialComparisonSection} id="roofing-options">
        <ContentCards items={servicesComparisonContentCards} style={{"--alignment": "left"} as React.CSSProperties} />
        <ContentCards items={servicesContentCards}/>
      </Section>

      <Section {...howToChooseSection} id="how-to-choose">
        <ContentCards {...howToChooseContentCards}/>
      </Section>
      
      <Section {...featuredServicesSection} id="featured-services">
        <ContentCards {...sidingAndRepairsContentCards}/>
        <ContentCards {...soffitAndFasciaContentCards} />
        <ContentCards {...roofLeakRepairContentCards} />
      </Section>

      <Section {...cleaningServicesSection} id="cleaning-services">
        <ContentCards {...cleaningServiesContentCards}/>
      </Section>

      <Section {...ourProcessSection} id="our-process">
        <ContentCards {...ourProcessContentCards} />
      </Section>

      <Section {...servicesContactSection}>
        <div className="services-cta-actions">
            <a href="/contact" className="btn btn-primary">
              Request a Free Estimate
            </a>
          </div>
      </Section>

      <Footer />
    </main>
  );
}