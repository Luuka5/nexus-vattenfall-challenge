
import useStore from '../lib/store';
import MultipleChoice from '../components/multipleChoice';

export default function SelectEnergyType() {
  const energyType = useStore(state => state.energyType);
  const setEnergyType = useStore(state => state.setEnergyType);

  return (<>
    <MultipleChoice value={energyType} setValue={value => setEnergyType(value)} buttons={[
      { text: 'Solar', value: 'solar' },
      { text: 'Wind', value: 'wind' },
      { text: 'Nuclear', value: 'nuclear' },
      { text: 'Hydro', value: 'hydro' },
    ]} />
    <p>{energyType}</p>
    </>);
}