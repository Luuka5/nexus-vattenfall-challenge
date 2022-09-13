import create from 'zustand'
import { calculateEnergyConsumption } from './utils';

const pollutionPerkWh = {
  'coal': 979 / 1000.0,
  'solar': 53 / 1000.0,
  'wind': 12 / 1000.0,
  'nuclear': 13 / 1000.0,
  'hydro': 26 / 1000.0,
}


function update(set) {
  set(state => {
    let energyConsumption = calculateEnergyConsumption(state.houseSize, state.people);

    const co2emissions = pollutionPerkWh[state.energyType] * energyConsumption;
    const price = 0.1248 * energyConsumption;

    return ({
      energyConsumption,
      co2emissions,
      price,
    })
  })
}

const useStore = create(set => ({

  co2emissions: 0,
  price: 0,
  energyConsumption: 0,
  suggestedPlan: null,
  info: ['tää on hyvä', 'mutta ongelma'],
  
  people: 1,

  houseSize: 0,
  setHouseSize: value => {
    set({
      houseSize: value,
      info: [Math.random(), Math.random()],
      suggestedPlan: ''+ Math.random(),
      co2emissions: Math.random() * 10,
    });
    update(set);
  },
  energyType: 'solar',
  setEnergyType: value => {
    set({ energyType: value, price: Math.random() * 100 });
    update(set);
  },

}));

export default useStore;