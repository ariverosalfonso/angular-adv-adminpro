import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit  {
  
  @Input('valor') progreso: number = 30; // Reibir un valor desde el padre
  @Input() btnclass: string = 'btn-primary';
  
  // @Input() progreso: number = 30;
  
  // tslint:disable-next-line: new-parens
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  // tslint:disable-next-line: typedef
  cambiarValor( valor: number ) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }
  // tslint:disable-next-line: typedef
  OnChange( nuevoValor: number ) {
    if ( nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);

  }
  ngOnInit(): void {
   this.btnclass = `btn ${ this.btnclass }`;
  }
}
