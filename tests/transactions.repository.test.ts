import { TransactionsRepository } from '../src/transactions/transactions.repository';

test('All transactions from repository must have unique Id', () => {
  const repo = new TransactionsRepository();

  const txns = repo.getTransactions(
    'DUMMFUNDCODE',
    new Date('2021-02-01'),
    new Date('2021-02-28')
  );

  const ids = txns.map((txn) => txn.id);

  expect(new Set(ids).size).toBe(110);
});

test('All transactions must have tradeId defined', () => {
  const repo = new TransactionsRepository();

  const txns = repo.getTransactions(
    'DUMMYFUNDCODE',
    new Date('2021-09-01'),
    new Date('2021-09-30')
  );

  txns.forEach((txn) => expect(txn.tradableId).toBeDefined());
});
