import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HistGetterService } from '../hist-getter.service';
import { SymbolData} from '../symbol-data';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild('canvas')
  private chartRef: ElementRef;
  private chart;
  public symbols: string[] = ['GOOG', 'AAPL'];
  private show: string[] = ['Open'];
  private metrics: Set<string> = new Set<string>();
  private datasets: any[] = [];
  private symbolData: Map<string, SymbolData> = new Map<string, SymbolData>();

  constructor(private histGetter: HistGetterService) {  }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: this.datasets
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            type: 'time'
          }],
          yAxes: [{
            display: true
          }],
        },
        legend: {
          display: false
        }
      }
    });

    for (const s of this.symbols) {
      const sym: SymbolData = this.histGetter.getSymbol(s);
      sym.withData((d: SymbolData) => {
        for (const k of d.keys) {
          this.datasets.push({
            label: `${d.symbol}::${k}`,
            data: d.dates.map((e, i) => {
              return {
                x: e,
                y: d.datapoints[k][i]
              };
            }),
            y: d.dates,
            x: d.datapoints[k],
            hidden: this.show.indexOf(k) === -1,
            backgroundColor: d.color
          });
          this.metrics.add(k);
        }
        this.symbolData.set(`${d.symbol}`, d);
        this.chart.update();
      });
    }
  }

}
