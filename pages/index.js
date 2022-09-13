import ParallaxEffect from '../components/parallaxEffect';
import GraphSection from '../components/GraphSection';
import ChartSection from '../components/ChartSection';
import SelectEnergyType from '../components/SelectEnergyType';
import BulletPoints from '../components/Info';
import { SuggestedPlan } from '../components/SuggestedPlan';


export default function Home() {
  
  return (
    <ParallaxEffect heading="Vattenfall:Visualizing the change">
      <GraphSection />
      <SelectEnergyType />
      <ChartSection />
      <BulletPoints />
      <SuggestedPlan />
    </ParallaxEffect>
  )
}