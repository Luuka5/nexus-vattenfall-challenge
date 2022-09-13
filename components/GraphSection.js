

import RangeSlider from '../components/slider';
import useStore from '../lib/store';
import Graph from '../components/graph';
import { calculateEnergyConsumption } from '../lib/utils';

export default function GraphSection() {
  const setHouseSize = useStore(state => state.setHouseSize);
  const houseSize = useStore(state => state.houseSize);
  const people = useStore(state => state.people);

  return (<>
    <Graph lines={[
        [12 / 0.001 - calculateEnergyConsumption(0, people), 12 / 0.001 - calculateEnergyConsumption(300, people)]
      ]} range={{
        minX: 0,
        maxX: 20,
        minY: 0,
        maxY: 12,
        scaleX: 20,
        scaleY: 0.001,
      }} />
      <p>House size: {houseSize}</p>
      <RangeSlider setRangevalue={value => setHouseSize(value)} max={300} />
  </>);
}