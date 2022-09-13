import useStore from "../lib/store";
import HorizontalBar from '../components/horizontalBar';

export default function ChartSection() {
  const co2emissions = useStore(state => state.co2emissions);
  const price = useStore(state => state.price);

  return (<>
    <HorizontalBar label={(
      <>CO<sup>2</sup> Emissions</>
    )} sliderValue={co2emissions} max={1000} />
    <HorizontalBar label="Price" sliderValue={price} max={500} />
  </>)
}