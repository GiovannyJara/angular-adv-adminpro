import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() titulo:string = "Sin título";
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Data one', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: [ '#9E120E', '#FF5800', '#FFB414' ] }
  ];

}
