import ParallaxEffect from '../components/parallaxEffect';
import GraphSection from '../components/GraphSection';
import ChartSection from '../components/ChartSection';
import SelectEnergyType from '../components/SelectEnergyType';
import BulletPoints from '../components/Info';
import { SuggestedPlan } from '../components/SuggestedPlan';
import Head from 'next/Head'

export default function Home() {
  
  return (
<<<<<<< HEAD
    <ParallaxEffect heading="Vattenfall:
    Visualizing the change">
=======
    <ParallaxEffect heading="Parallax effect">
      <Head>
        <title>Visualizing the change</title>
      </Head>
>>>>>>> 0fa898b79f24a6d9c6def5510a6ef6d4132a656a
      <GraphSection />
      <SelectEnergyType />
      <ChartSection />
      <BulletPoints />
      <SuggestedPlan />
    </ParallaxEffect>
  )
}