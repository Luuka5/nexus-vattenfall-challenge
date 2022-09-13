import create from 'zustand'
import { calculateEnergyConsumption } from './utils';

const pollutionPerkWh = {
  'coal': 979 / 1000.0,
  'solar': 53 / 1000.0,
  'wind': 12 / 1000.0,
  'nuclear': 13 / 1000.0,
  'hydro': 26 / 1000.0,
}

const bulletPoints = {
  'solar': [
    'Aurinkoenergia on kestävää, koska me emme voi ylikuluttaa sitä.',
    'Aurinkoenergia ei sellaisenaan tuota päästöjä toimiessaan. Välilliset päästöt ja ympäristövaikutukset syntyvät paneeleiden tuotannossa tarvittavista materiaaleista, tuotantoon sitoutuneesta energiasta, kuljetuksesta ja asennuksesta.',
  ],
  'wind': [
    'Lähes 80 prosenttia tuulivoimalassa käytetyistä raaka-aineista pystytään kierrättämään.',
    'LUT:n tutkimusten mukaan maalla sijaitseva tuulivoimala on kaikkein edullisin tapa tuottaa sähköä.',
    'Tuuliturbiinit tarvitsevat säätövoimaa: ne pystyvät tuottamaan sähköä vain tuulennopeuden ollessa sopiva, joten tarvitsemme tuulivoiman lisäksi myös muita tuotantolähteitä.',
  ],
  'nuclear': [
    
  ],
  'hydro': [
    
  ],
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
      coalEmissions: pollutionPerkWh.coal * energyConsumption,
      info: bulletPoints[state.energyType],
    })
  })
}

const useStore = create(set => ({

  co2emissions: 0,
  price: 0,
  energyConsumption: 0,
  suggestedPlan: null,
  info: [],
  coalEmissions: 0,
  
  people: 1,

  houseSize: 0,
  setHouseSize: value => {
    set({
      houseSize: value,
    });
    update(set);
  },
  energyType: 'solar',
  setEnergyType: value => {
    set({ energyType: value });
    update(set);
  },

}));

export default useStore;