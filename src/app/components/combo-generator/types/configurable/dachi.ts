import {Action} from "../action";

export class Dachi extends Action {
  constructor() {
    super(
      {
        10: ['Fudo Dachi', 'Yoi Dachi', 'Zenkutsu Dachi'],
        9: ['Sanchin Dachi', 'Musubi Dachi', 'Kokutsu Dachi'],
        8: ['Kiba Dachi', 'Kiba Dachi Yon Ju Go'],
        7: ['Neko Ashi Dachi']
      }
    );
  }
}
