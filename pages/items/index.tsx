import BestItemsSection from "./components/marketPage/BestItemsSection";
import AllItemsSection from "./components/marketPage/AllItemsSection";
import { Container } from "@/styles/CommonStyles";

const MarketPage: React.FC = () => {
  return (
    <Container>
      <BestItemsSection />
      <AllItemsSection />
    </Container>
  );
};

export default MarketPage;
