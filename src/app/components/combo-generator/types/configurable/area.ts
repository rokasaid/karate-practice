import {Action} from "../action";

export class Area extends Action {
  constructor() {
    super(
      {
        10: ['Jodan', 'Chudan', 'Gedan']
      }
    );
  }
}
