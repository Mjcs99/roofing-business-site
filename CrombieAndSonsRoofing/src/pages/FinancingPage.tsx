import ContentCards from "../components/layout/ContentCards";
import Footer from "../components/layout/Footer";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import { financingBenefitsContentCards, financingBenefitsSection, financingFaqContentCards, financingFaqSection, financingHero, financingHeroContentCards, howItWorksContentCards, howItWorksSection } from "../data/FinancingPageData";
import "./FinancingPage.css";

export default function FinancingPage() {
  return (
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
  );
}