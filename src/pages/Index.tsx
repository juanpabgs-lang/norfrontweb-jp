import { Layout } from "@/components/layout/Layout";
import { Hero2 } from "@/components/home2/Hero2";
import { FlagshipProof } from "@/components/home2/FlagshipProof";
import { ProductShowcase } from "@/components/home2/ProductShowcase";
import { PortfolioIndex } from "@/components/home2/PortfolioIndex";
import { ModelPillars } from "@/components/home2/ModelPillars";
import { ProcessStrip } from "@/components/home2/ProcessStrip";
import { ClosingCTA } from "@/components/home2/ClosingCTA";

const Index = () => {
  return (
    <Layout>
      <Hero2 />
      <FlagshipProof />
      <ProductShowcase />
      <PortfolioIndex />
      <ModelPillars />
      <ProcessStrip />
      <ClosingCTA />
    </Layout>
  );
};

export default Index;
