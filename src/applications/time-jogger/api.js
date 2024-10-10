import dayjs from "dayjs";

const defaultDate = dayjs('2024-01-01T23:00');

const calculateCarDueTime = (firstCarDueTime, carNumber, isCarZeroDueTimes) =>
    dayjs(firstCarDueTime)
        .add(carNumber - 1, 'minute')
        .add(isCarZeroDueTimes ? 1 : 0, 'minute');

export { calculateCarDueTime, defaultDate };