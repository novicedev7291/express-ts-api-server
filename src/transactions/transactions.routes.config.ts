import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { TransactionsRepository } from './transactions.repository';

interface Query {
  fundCode: string;
  startDate: string;
  endDate: string;
}

export class TransactionsRoutesConfig extends CommonRoutesConfig {
  constructor(
    app: Application,
    name: string,
    private txnRepo: TransactionsRepository
  ) {
    super(app, name);
  }

  configureRoutes(): void {
    this.app
      .route('/transactions')
      .all((request: Request, response: Response, next: NextFunction) => {
        next();
      })
      .get(
        async (
          request: Request<unknown, unknown, unknown, Query>,
          response: Response
        ) => {
          const { query } = request;

          const txns = this.txnRepo.getTransactions(
            query.fundCode,
            new Date(query.startDate),
            new Date(query.endDate)
          );

          await this.sleep(1);
          response.status(200).send(txns);
        }
      );
  }

  sleep(second: number) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(true), second * 1000)
    );
  }
}
