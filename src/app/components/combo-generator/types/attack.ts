import {IAction} from "./action.interface";
import {Area} from "./configurable/area";
import {IAttack} from "./attack.interface";
import {Geri} from "./configurable/geri";
import {Side} from "./configurable/side";
import {Tsuki} from "./configurable/tsuki";
import {Uke} from "./configurable/uke";

export class Attack implements IAttack {

  private _moves: IAction[] = [new Tsuki(), new Geri(), new Uke()];

  generateAttack(kyu: number, includeLowerKyu: boolean, numOfAttacks: number): string {
    const amount: number[] = [...Array(Math.ceil(Math.random() * numOfAttacks)).keys()];
    let result = '';

    amount.forEach(() => {
      let side = new Side().generate(kyu, includeLowerKyu);
      side = side.length > 0 ? side.concat(' ') : side;

      let action = this._moves[Math.ceil(Math.random() * this._moves.length - 1)];
      if (action instanceof Tsuki) {
        let area = new Area().generate(kyu, includeLowerKyu);
        let punch = action.generate(kyu, includeLowerKyu)

        console.log(punch)
        if (['Tettsui Komi Kami Uchi', 'Tettsui Oroshi Ganmen Uchi', 'Tettsui Hizo Uchi'].includes(punch))
        {
          console.log("No area!");
          result += `${side}${punch} `;

        }
        else if (punch.includes('Morote'))
          result += `${punch} ${area} `;
        else
          result += `${side}${punch} ${area} `;
      } else {
        result += (`${side}${action.generate(kyu, includeLowerKyu)} `);
      }
    });
    return result;
  }
}
