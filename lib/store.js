import create from 'zustand'

const useStore = create(set => ({

  co2emissions: 0,
  price: 0,
  
  // temporary
  count: 0,
  setCount: count => {
    set({ count, price: count, co2emissions: count });
  },
}));

export default useStore;