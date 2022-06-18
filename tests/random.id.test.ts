import { RandomIdGenerator } from '../src/common/util';

test('Checking Random Ids generated are all unique', () => {
  const total = 10;
  const length = 15;

  const ids: string[] = RandomIdGenerator.generateStrIds(total, length);
  expect(new Set(ids).size).toBe(total);
});
