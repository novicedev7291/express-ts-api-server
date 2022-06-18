import { allDatesBetween } from '../src/common/util';

test('Should give all dates between 2021-03-29 & 2021-04-01', () => {
  const dates = allDatesBetween(new Date('2021-03-29'), new Date('2021-04-01'));

  const expectedDates = [
    new Date('2021-03-29'),
    new Date('2021-03-30'),
    new Date('2021-03-31'),
    new Date('2021-04-01')
  ];

  expect(dates).toStrictEqual(expectedDates);
});

test('Should pass the leap year range between 2020-02-27 & 2020-03-03', () => {
  const dates = allDatesBetween(new Date('2020-02-27'), new Date('2020-03-03'));

  const expectedDates = [
    new Date('2020-02-27'),
    new Date('2020-02-28'),
    new Date('2020-02-29'),
    new Date('2020-03-01'),
    new Date('2020-03-02'),
    new Date('2020-03-03')
  ];

  expect(dates).toStrictEqual(expectedDates);
});
