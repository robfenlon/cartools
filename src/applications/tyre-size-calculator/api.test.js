import * as api from './api';

describe('tyre-size-calculator api tests', () => {
  describe('getCircumference', () => {
    test.each([
      ['0.00', 'metric', 0, 0, 0],
      ['0.00', 'imperial', 0, 0, 0],
      ['1658.76', 'metric', 100, 10, 20],
      ['65.31', 'imperial', 100, 10, 20]])(
        "returns %p %p for tyre %p/%p R%p",
        (expectedResult, unit, width, profile, radius) => {
          //act
          const tyre = {
            id: 0,
            profile: profile,
            radius: radius,
            width: width
          }

          // assert
          expect(api.getCircumference(tyre, unit)).toBe(expectedResult);
        }
      );
  });

  describe('getDiameter', () => {
    test.each([
      ['0.00', 'metric', 0, 0, 0],
      ['0.00', 'imperial', 0, 0, 0],
      ['381.00', 'metric', 0, 0, 15],
      ['15.00', 'imperial', 0, 0, 15],
      ['401.00', 'metric', 100, 10, 15],
      ['15.79', 'imperial', 100, 10, 15]])(
        "returns %p %p for tyre %p/%p R%p",
        (expectedResult, unit, width, profile, radius) => {
          //act
          const tyre = {
            id: 0,
            profile: profile,
            radius: radius,
            width: width
          }

          // assert
          expect(api.getDiameter(tyre, unit)).toBe(expectedResult);
        }
      );
  });

  describe('getRadius', () => {
    test.each([
      ['0.00', 'metric', 0, 0, 0],
      ['0.00', 'imperial', 0, 0, 0],
      ['190.50', 'metric', 0, 0, 15],
      ['7.50', 'imperial', 0, 0, 15],
      ['200.50', 'metric', 100, 10, 15],
      ['7.89', 'imperial', 100, 10, 15]])(
        "returns %p %p for tyre %p/%p R%p",
        (expectedResult, unit, width, profile, radius) => {
          //act
          const tyre = {
            id: 0,
            profile: profile,
            radius: radius,
            width: width
          }

          // assert
          expect(api.getRadius(tyre, unit)).toBe(expectedResult);
        }
      );
  });

  describe('getRotationsPerKm', () => {
    test.each([
      ['Infinity', 0, 0, 0],
      ['602.86', 100, 10, 20],
      ['44.96', 1000, 100, 200]])(
        "returns %p for tyre %p/%p R%p",
        (expectedResult, width, profile, radius) => {
          //act
          const tyre = {
            id: 0,
            profile: profile,
            radius: radius,
            width: width
          }

          // assert
          expect(api.getRotationsPerKm(tyre)).toBe(expectedResult);
        }
      );
  });

  describe('getSidewall', () => {
    test.each([
      ['0.00', 'metric', 0, 0, 0],
      ['0.00', 'imperial', 0, 0, 0],      
      ['10.00', 'metric', 100, 10, 0],
      ['0.39', 'imperial', 100, 10, 0],
      ['10.00', 'metric', 100, 10, 20],
      ['0.39', 'imperial', 100, 10, 20]])(
        "returns %p %p for tyre %p/%p R%p",
        (expectedResult, unit, width, profile, radius) => {
          //act
          const tyre = {
            id: 0,
            profile: profile,
            radius: radius,
            width: width
          }

          // assert
          expect(api.getSidewall(tyre, unit)).toBe(expectedResult);
        }
      );
  });
});
