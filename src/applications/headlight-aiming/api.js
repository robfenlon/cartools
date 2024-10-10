const verticalOffset = 0.0125;
const horizontalOffset = 0.01;

const calculateFloorOffset = (distance, height) => {
  return height - distance * verticalOffset;
};

const calculateLeftOffset = (distance, lampsDistance) => {
  var lampsCentre = lampsDistance / 2;
  return lampsCentre + distance * horizontalOffset;
};

const calculateRightOffset = (distance, lampsDistance) => {
  var lampsCentre = lampsDistance / 2;
  return lampsCentre - distance * horizontalOffset;
};

export { calculateFloorOffset, calculateLeftOffset, calculateRightOffset };