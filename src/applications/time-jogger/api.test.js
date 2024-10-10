import dayjs from "dayjs";

import * as api from './api';

describe('time-jogger api tests', () => {
  describe('defaultDate', () => {
    test('should always equal 2024-01-01T23:00', () => {
      const expectedDateTime = dayjs('2024-01-01T23:00');

      expect(expectedDateTime.isSame(api.defaultDate)).toBeTruthy();
    });
  });

  describe('calculateCarDueTime', () => {
    test('returns same time when car number is 1', () => {
      // arrange
      const carNumber = 1;
      const firstCarDue = api.defaultDate;

      // act
      const carDueTime = api.calculateCarDueTime(firstCarDue, carNumber, false);

      // assert
      expect(carDueTime.isSame(firstCarDue)).toBeTruthy();
    });
    test('reduces by 1 minute when car zero is true', () => {
      // arrange
      const carNumber = 1;
      const firstCarDue = api.defaultDate;

      // act
      const carDueTime = api.calculateCarDueTime(firstCarDue, carNumber, true);

      // assert
      expect(carDueTime.subtract(1, 'minute').isSame(firstCarDue)).toBeTruthy();
    });

    test.each([
      [0, 1],
      [10, 11],
      [999, 1000],
      [1001, 1002]])(
        "adds %p minutes when car number is %p",
        (deltaMinutes, carNumber) => {
          // arrange
          const firstCarDue = api.defaultDate;

          // act
          const carDueTime = api.calculateCarDueTime(firstCarDue, carNumber, false);

          // assert
          expect(carDueTime.subtract(deltaMinutes, 'minute').isSame(firstCarDue)).toBeTruthy();
        }
      );
  });
});
