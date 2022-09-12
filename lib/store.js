import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  setCount: count => {
    set({ count });
  },
}));

export default useStore;