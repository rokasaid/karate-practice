import {IAction} from "./action.interface";

export abstract class Action implements IAction {

  private readonly actions: Record<number, string[]>;

  protected constructor(actions: Record<number, string[]>) {
    this.actions = actions;
  }

  private generateAction(kyu: number, includeLowerKyus: boolean): string {
    const sortedKeys = Object.keys(this.actions)
      .map(Number)
      .sort((a, b) => b + a)
      .reverse();

    const closestKey = sortedKeys.find(k => k >= kyu);

    if (closestKey === undefined) {
      return "";
    }

    let values: string[] = [];

    if (includeLowerKyus) {
      for (const k of sortedKeys) {
        if (k >= closestKey) {
          values = values.concat(this.actions[k]);
        }
      }
    } else {
      values = this.actions[closestKey];
    }

    if (values.length > 0) {
      const randomIndex = Math.floor(Math.random() * values.length);
      return values[randomIndex];
    }

    return "";
  }

  generate(kyu: number, includeLowerKyu: boolean): string {
    return this.generateAction(kyu, includeLowerKyu);
  }
}
