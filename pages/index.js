import ParallaxEffect from '../components/parallaxEffect';
import MultipleChoice from '../components/multipleChoice';
import GraphSection from '../components/GraphSection';


export default function Home() {
  
  return (
    <ParallaxEffect heading="Parallax effect">
    <GraphSection />
      
      <MultipleChoice buttons={[
        { text: 'Aurinko Energia', value: 'solar' },
        { text: 'Tuulivoima', value: 'wind' },
      ]} />
    
    </ParallaxEffect>
  )
}