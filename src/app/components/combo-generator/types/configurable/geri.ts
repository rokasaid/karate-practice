import {Action} from "../action";

export class Geri extends Action {
  constructor() {
    super(
      {
        10: ['Kin Geri', 'Hiza Ganmen Geri'],
        9: ['Mae Geri Chudan Chusoku'],
        8: ['Mae Geri Jodan Chusoku'],
        7: [
          'Mae Chusoku Keage', 'Teisoku Mawashi Soto Keage',
          'Haisoku Mawashi Uchi Keage', 'Yoko Sokuto Keage'
        ]
      }
    );
  }
}
