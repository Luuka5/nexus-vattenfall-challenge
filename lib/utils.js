
export function calculateEnergyConsumption(houseSize, people) {
  return (800 * (2-1/Math.pow(2, people)))+30*houseSize;
}