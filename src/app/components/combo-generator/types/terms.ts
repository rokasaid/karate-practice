import {Tsuki} from "./configurable/tsuki";

export interface Kyu {
  level: string;
  colour: string;
}

export class Terms {

  constructor() {
  }

  private readonly _kyu: Kyu[] = [
    {
      level: '10',
      colour: 'Orange'
    }
  ];

  public get kyu(): Kyu[] {
    return this._kyu;
  }

}
