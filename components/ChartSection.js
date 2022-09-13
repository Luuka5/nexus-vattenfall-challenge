import useStore from "../lib/store";
import HorizontalBar from '../components/horizontalBar';

export default function ChartSection() {
  const co2emissions = useStore(state => state.co2emissions);
  const coalEmissions = useStore(state => state.coalEmissions);
  const price = useStore(state => state.price);
  const energyType = useStore(state => state.energyType);

  return (<>
    <HorizontalBar label={(
      <>CO<sup>2</sup> Emissions of {energyType} energy</>
    )} sliderValue={Math.round(co2emissions)} max={3000} unit="kg/year" />
    <HorizontalBar label={(
      <>CO<sup>2</sup> Emissions of Coal</>
    )} sliderValue={Math.round(coalEmissions)} max={3000} unit="kg/year"/>
    <HorizontalBar label="Price" sliderValue={Math.round(price)} max={1300} unit="€/year" />
    <p>all units are per one year </p>
  </>)
}