export class RandomIdGenerator {
  private static generate(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let str = '';

    for (let i = 0; i < length; i++) {
      const pos = Math.random() * chars.length;
      str += chars.charAt(pos);
    }

    return str;
  }
  static generateStrIds(total: number, length: number): string[] {
    const ids: string[] = [];
    for (let i = 0; i < total; i++) {
      ids.push(RandomIdGenerator.generate(length));
    }
    return ids;
  }
}

export function allDatesBetween(startDate: Date, endDate: Date): Date[] {
  let dts = [];
  for (let dt = startDate; dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    dts.push(new Date(dt));
  }
  return dts;
}
