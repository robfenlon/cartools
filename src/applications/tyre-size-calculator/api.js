const inchToMm = inch => inch * 25.4;
const mmToinch = mm => mm / 25.4;

const getSidewall = (tyre, unit) => {
  const sidewallMm = +tyre.width * (+tyre.profile / 100);

  return (unit === 'imperial' ? mmToinch(sidewallMm) : sidewallMm).toFixed(2);
};

const getRadius = (tyre, unit) => {
  const radiusMm = getDiameter(tyre) / 2;

  return (unit === 'imperial' ? mmToinch(radiusMm) : radiusMm).toFixed(2);
};

const getDiameter = (tyre, unit) => {
  const diameterMm = (getSidewall(tyre) * 2) + inchToMm(+tyre.radius);

  return (unit === 'imperial' ? mmToinch(diameterMm) : diameterMm).toFixed(2);
};

const getCircumference = (tyre, unit) => {
  const circumferenceMm = getDiameter(tyre) * Math.PI;

  return (unit === 'imperial' ? mmToinch(circumferenceMm) : circumferenceMm).toFixed(2);
};

const getRotationsPerKm = tyre => {
  const circumferenceMm = getCircumference(tyre);
  const rotationsPerKm = 1000 / (circumferenceMm / 1000);

  return rotationsPerKm.toFixed(2);
}

export { getCircumference, getDiameter, getRadius, getRotationsPerKm, getSidewall };