import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = 'Resultado';
  altura: number;
  peso: number;
  res: number;

  calcular() {
    //validar se os campos foram preenchidos
    if (this.altura && this.peso) {
      let imc = 0;
      let alt = this.altura;
      let pes = this.peso;
      this.res = pes / alt ** 2;
      if (this.res < 18.5) {
        this.resultado = 'Abaixo do peso';
      }
      if (this.res >= 18.5 && this.res <= 24.9) {
        this.resultado = 'Peso normal';
      }
      if (this.res >= 25.0 && this.res <= 29.0) {
        this.resultado = 'Sobrepeso';
      }
      if (this.res >= 30.0 && this.res <= 39.9) {
        this.resultado = 'Obesidade ';
      }
      if (this.res > 40.0) {
        this.resultado = 'Obesidade grave';
      }
    } else {
      this.resultado = 'Preencha corretamente os campos';
    }
  }
}
