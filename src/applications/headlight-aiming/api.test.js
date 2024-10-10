import * as api from './api';

describe('headlight-aiming api tests', () => {
  describe('calculateFloorOffset', () => {
    test.each([
      [0, 0, 0],
      [37.5, 5000, 100],
      [75, 10000, 200]])(
        "returns %p mm when distance is %p and height is %p",
        (expectedResult, distance, height) => {
          // assert
          expect(api.calculateFloorOffset(distance, height)).toBe(expectedResult);
        }
      );
  });

  describe('calculateLeftOffset', () => {
    test.each([
      [0, 0, 0],
      [50, 5000, 0],
      [100, 5000, 100],
      [150, 10000, 100],
      [100, 10000, 0]])(
        "returns %p mm when distance is %p and lamp spacing is %p",
        (expectedResult, distance, lampDistance) => {
          // assert
          expect(api.calculateLeftOffset(distance, lampDistance)).toBe(expectedResult);
        }
      );
  });

  describe('calculateRightOffset', () => {
    test.each([
      [0, 0, 0],
      [-50, 5000, 0],
      [0, 5000, 100],
      [-50, 10000, 100],
      [-100, 10000, 0]])(
        "returns %p mm when distance is %p and lamp spacing is %p",
        (expectedResult, distance, lampDistance) => {
          // assert
          expect(api.calculateRightOffset(distance, lampDistance)).toBe(expectedResult);
        }
      );
  });
});
