import ContentCards from "../components/layout/ContentCards";
import Footer from "../components/layout/Footer";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import SEO from "../components/layout/SEO";
import { financingBenefitsContentCards, financingBenefitsSection, financingFaqContentCards, financingFaqSection, financingHero, financingHeroContentCards, howItWorksContentCards, howItWorksSection } from "../data/FinancingPageData";
import "./FinancingPage.css";

export default function FinancingPage() {
  return (
    <>
      <SEO title="Roof Financing in Red Deer | Flexible Payment Options" description="Explore flexible roof financing options in Red Deer, Alberta. Spread the cost of repairs or replacements into manageable monthly payments with a simple application process." />
      <main className="financing-page">

        <PageHero {...financingHero}> 
          <ContentCards {...financingHeroContentCards}>
            <span className="financing-disclaimer">
                *Subject to approval. Terms and monthly payments vary.
              </span>
          </ContentCards>
        </PageHero>

        <Section id="how-it-works" {...howItWorksSection}>
          <ContentCards {...howItWorksContentCards}/>
        </Section>

        <Section {...financingBenefitsSection}>
          <ContentCards {...financingBenefitsContentCards}/>
        </Section>

        <Section {...financingFaqSection}>
          <ContentCards {...financingFaqContentCards}/>
        </Section>
        
        <Footer/>
      
      </main>
    </>
  );
}