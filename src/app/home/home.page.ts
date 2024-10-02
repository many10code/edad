import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  edadPerro: number= 0;
  edadHumana: number = 0;

  constructor() {}
  calcularEdadHumana() {
    if (this.edadPerro) {
      this.edadHumana = this.edadPerro * 7;
    }
  }

}



