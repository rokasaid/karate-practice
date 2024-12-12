import {Component} from '@angular/core';
import {ComboGeneratorComponent} from "../combo-generator/combo-generator.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ComboGeneratorComponent, NgClass, NgIf]
})
export class HomeComponent {
  kyu: number = 10;

  setKyu(kyu: number) {
    this.kyu = kyu;
  }

  getCSSClass(kyu: number) {
    return 'belt-' + kyu;
  }
}
