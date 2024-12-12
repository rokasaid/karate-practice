import {Dachi} from "./configurable/dachi";
import {Side} from "./configurable/side";
import {IStance} from "./stance.interface";

export class Stance implements IStance {
  generateStance(kyu: number, includeLowerKyu: boolean): string {
    let side = new Side().generate(kyu, includeLowerKyu);
    side = side.length > 0 ? side.concat(' ') : side;

    let action = new Dachi().generate(kyu, includeLowerKyu);
    if (action !== 'Zenkutsu Dachi') {
      side = '';
      action = '';
    }

    return `${side}${action}`
  }
}
