import { RandomIdGenerator } from '../common/util';
import { Transaction } from './transaction.model';

export class TransactionsRepository {
  tradeIds: string[];
  max = 172034023.2303;
  min = 129302983.3023;

  constructor() {
    this.tradeIds = RandomIdGenerator.generateStrIds(10, 8);
  }

  getTransactions(
    fundCode: string,
    startDate: Date,
    endDate: Date
  ): Transaction[] {
    const txns: Transaction[] = [];
    for (let i = 0; i < 110; i++) {
      txns.push(this.generateATxn(i + 1));
    }
    return txns;
  }

  private generateATxn(id: number): Transaction {
    return {
      id,
      tradableId: this.tradeIds[Math.floor(Math.random() * 9)],
      netAmount: Math.random() * (this.max - this.min) + this.min
    };
  }
}
