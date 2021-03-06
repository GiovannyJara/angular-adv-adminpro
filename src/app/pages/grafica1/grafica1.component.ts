import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Doughnut
  @Input() doughnutChartLabelsOne: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartDataOne = [
    [100, 450, 100]
  ];
  @Input() public doughnutChartType: ChartType = 'doughnut';
  @Input() public colorsOne: Color[] = [
    { backgroundColor: [ '#9E120E', '#FF5800', '#FFB414' ] }
  ];

}
