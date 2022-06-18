import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { CommonRoutesConfig } from './common/common.routes.config';
import { TransactionsRoutesConfig } from './transactions/transactions.routes.config';
import { TransactionsRepository } from './transactions/transactions.repository';
import { NavsRepository } from './navs/navs.repository';
import { NavsRouteConfig } from './navs/navs.routes.config';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 9090;

// HttpServer to listen on all ports
const server = http.createServer(app);

// Json middleware to parse all incoming request as JSON
app.use(express.json());

const routes: Array<CommonRoutesConfig> = [];

routes.push(
  new TransactionsRoutesConfig(
    app,
    'Transactions',
    new TransactionsRepository()
  )
);
routes.push(new NavsRouteConfig(app, 'Navs', new NavsRepository()));

app.get('/', (request: Request, response: Response) => {
  response.send('Hello, I am typescript + express server');
});

server.listen(port, () => {
  routes.forEach((route) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
  console.log(`[server]: Server is listening at http://localhost:${port}`);
});
