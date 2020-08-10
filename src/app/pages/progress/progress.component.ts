import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progreso1: number = 25;
  progreso2: number = 35;

  // tslint:disable-next-line: typedef
  get getProgreso1() {
    return `${ this.progreso1 }% `;
  }

  // tslint:disable-next-line: typedef
  get getProgreso2() {
    return `${ this.progreso2 }% `;
  }

  // tslint:disable-next-line: typedef
  cambioValorHijo( valor: number ) {
    console.log('Hey', valor);
  }

}
