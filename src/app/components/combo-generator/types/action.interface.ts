export interface IAction {
  generate(kyu: number, includeLowerKyu: boolean): string;
}
