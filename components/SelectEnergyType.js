
import useStore from '../lib/store';
import MultipleChoice from '../components/multipleChoice';

export default function SelectEnergyType() {
  const energyType = useStore(state => state.energyType);
  const setEnergyType = useStore(state => state.setEnergyType);

  return (<>
    <MultipleChoice value={energyType} setValue={value => setEnergyType(value)} buttons={[
      { text: 'Aurinko Energia', value: 'solar' },
      { text: 'Tuulivoima', value: 'wind' },
    ]} />
    <p>{energyType}</p>
    </>);
}