import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan ', 'Refresh', 'Soda'];
  public data1 = [
    [350, 450, 100],
  ];
 
}
