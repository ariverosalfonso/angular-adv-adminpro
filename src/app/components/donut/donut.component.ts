import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  @Input() title: string = 'Sin titulo';

  // tslint:disable-next-line: no-input-rename
  @Input ('labels') doughnutChartLabels: Label[] = ['label 1', 'label 2', 'label 3'];
  // tslint:disable-next-line: no-input-rename
  @Input ('data') doughnutChartData: MultiDataSet = [
    [10, 20, 35],
  ];
  // tslint:disable-next-line: no-input-rename
  public colors: Color[] = [
    { backgroundColor: ['#709BFF', '#DA35FF', '#9CFF33' ]}
  ];

}
