import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Attack} from './types/attack';
import {Stance} from './types/stance';
import {Kyu} from './types/kyu';
import {Terms} from './types/terms';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-combo-generator',
  standalone: true,
  templateUrl: './combo-generator.component.html',
  imports: [
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./combo-generator.component.scss']
})
export class ComboGeneratorComponent implements OnInit {
  @Output() selectedKyuEvent: EventEmitter<number> = new EventEmitter<number>();
  selectedKyu: number = 10;
  numOfAttacks: number = 1;

  result: string = '';
  kyus: number[] = new Kyu().getKyuList();
  includeLowerKyu: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.selectedKyuEvent.emit(this.selectedKyu);
  }

  onKyuChange(kyu: string): void {
    this.selectedKyu = Number.parseInt(kyu);
    this.selectedKyuEvent.emit(this.selectedKyu)
  }

  onAttackNumberChange(value: string): void {
    this.numOfAttacks = Number.parseInt(value);
  }

  generateCombo() {
    let stance = new Stance().generateStance(this.selectedKyu, this.includeLowerKyu);
    stance = stance.length > 0 ? stance.concat(' ') : stance;
    let attack = new Attack().generateAttack(this.selectedKyu, this.includeLowerKyu, this.numOfAttacks);

    this.result = `${stance}${attack}`
    return this.result;
  }
}
