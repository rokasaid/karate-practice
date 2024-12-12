import {Action} from "../action";

export class Uke extends Action {
  constructor() {
    super(
      {
        10: ['Seiken Jodan Uke', 'Seiken Mae Gedan Barai'],
        9: ['Seiken Chudan Uchi Uke', 'Seiken Chudan Soto Uke'],
        8: ['Seiken Morote Chudan Uchi Uke', 'Seiken Chudan Uchi Uke / Gedan Barai'],
        7: ['Mawashi Gedan Barai Shuto', 'Mawashi Uke']
      }
    );
  }
}
