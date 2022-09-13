import create from 'zustand'

const useStore = create(set => ({

  co2emissions: 0,
  price: 0,
  suggestedPlan: null,
  info: [],

  houseSize: 0,
  setHouseSize: value => {
    set({
      houseSize: value,
      info: [Math.random(), Math.random()],
      suggestedPlan: ''+ Math.random(),
      co2emissions: Math.random() * 10,
    });
  },
  energyType: 0,
  setEnergyType: value => {
    set({ energyType: value, price: Math.random() * 100 });
  },

}));

export default useStore;