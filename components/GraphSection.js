

import RangeSlider from '../components/slider';
import useStore from '../lib/store';
import Graph from '../components/graph';

export default function GraphSection() {
  const setHouseSize = useStore(state => state.setHouseSize);
  const houseSize = useStore(state => state.houseSize);

  return (<>
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
      <p>House size: {houseSize}</p>
      <RangeSlider setRangevalue={value => setHouseSize(value)} />
  </>);
}