import { allDatesBetween } from '../common/util';
import { Nav } from './navs.model';

export class NavsRepository {
  max = 290129038283.392;
  min = 250590349030.123;
  constructor() {}

  getAllNavs(): Nav[] {
    const allDates = allDatesBetween(
      new Date('2019-01-01'),
      new Date('2022-03-31')
    );

    return allDates.map((date) => ({
      amount: Math.random() * (this.max - this.min) + this.min,
      atDate: date
    }));
  }
}
