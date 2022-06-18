import { Application, Request, Response } from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { NavsRepository } from './navs.repository';

export class NavsRouteConfig extends CommonRoutesConfig {
  constructor(app: Application, name: string, private navRepo: NavsRepository) {
    super(app, name);
  }

  configureRoutes(): void {
    this.app.route('/allNavs').get((request: Request, response: Response) => {
      response.status(200).send(this.navRepo.getAllNavs());
    });
  }
}
