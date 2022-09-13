import ParallaxEffect from '../components/parallaxEffect';
import GraphSection from '../components/GraphSection';
import ChartSection from '../components/ChartSection';
import SelectEnergyType from '../components/SelectEnergyType';
import BulletPoints from '../components/Info';


export default function Home() {
  
  return (
    <ParallaxEffect heading="Parallax effect">
      <GraphSection />
      <SelectEnergyType />
      <ChartSection />
      <BulletPoints />
      
    </ParallaxEffect>
  )
}