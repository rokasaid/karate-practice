import {Action} from "../action";

export class Tsuki extends Action {
  constructor() {
    super(
      {
        10: ['Oi Tsuki', 'Morote Tsuki'],
        9: ['Seiken Gyaku Tsuki', 'Seiken Ago Uchi'],
        8: ['Shita Tsuki', 'Tate Tsuki', 'Jun Tsuki'],
        7: [
          'Tettsui Komi Kami Uchi', 'Tettsui Oroshi Ganmen Uchi',
          'Tettsui Hizo Uchi', 'Tetsui Yoko Uchi'
        ]
      }
    );
  }
}
