import ParallaxEffect from '../components/parallaxEffect';
import GraphSection from '../components/GraphSection';
import ChartSection from '../components/ChartSection';
import SelectEnergyType from '../components/SelectEnergyType';
import BulletPoints from '../components/Info';
import { SuggestedPlan } from '../components/SuggestedPlan';
import Head from 'next/Head'

export default function Home() {
  
  return (
    <ParallaxEffect heading={<>Vattenfall:<br/>Visualizing the change</>}>
      <Head>
        <title>Visualizing the change</title>
      </Head>
      <GraphSection />
      <SelectEnergyType />
      <ChartSection />
      <BulletPoints />
      <h2 style={{ paddingBottom: '2rem', fontSize: '160%' }}>Suggested energy plan:</h2>
      <SuggestedPlan />
    </ParallaxEffect>
  )
}