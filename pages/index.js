import styles from '../styles/Home.module.css';
import useStore from '../lib/store';
import CountVisual from '../components/countVisual';
import CountInput from '../components/countInput';
import Graph from '../components/graph';
import ParallaxEffect from '../components/parallaxEffect';
import MultipleChoice from '../components/multipleChoice';

export default function Home() {

  const count = useStore(state => state.count);
  const setCount = useStore(state => state.setCount);
  
  return (
    <ParallaxEffect heading="Parallax effect">  
      <div>
        <MultipleChoice buttons={[
          { text: 'Aurinko Energia', value: 'solar' },
          { text: 'Tuulivoima', value: 'wind' },
        ]} />
        <Graph lines={[
          [0, 1, 1.2, 1.3, 2.7, 5.1, 6.5, 7.8, 8.9, 9]
        ]} range={{
          minX: 0,
          maxX: 18,
          minY: -1,
          maxY: 11,
          scaleX: 2,
          scaleY: 1,
        }} />
        <CountVisual />
        <CountInput setValue={value => cono} />
      </div>
    </ParallaxEffect>
  )
}