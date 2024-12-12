export class Kyu {
  getKyuList(): number[] {
    const result: number[] = [];

    for (let i = 7; i <= 10; i++)
      result.unshift(i);

    return result;
  }
}
