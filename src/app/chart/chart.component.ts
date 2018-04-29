import {Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import { ChartService } from '../chart.service';
import {BaseChartDirective} from 'ng2-charts';
import {TYPE_OF_REQUEST} from '../dataTypes';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  @ViewChild('baseChart') chart: BaseChartDirective;
  private dataTypeFlag: TYPE_OF_REQUEST;
  @Input() IP: string;

  public getDaysData(): void {
    this.lineChartLabels = [];
    this.lineChartData = [{data: [], label: [this.IP]}];
    this.chartService.getDaysData(this.IP)
      .subscribe(records => {
        records.map(record => {
          this.lineChartLabels.push(record.timestamp.slice(0, 10));
          this.lineChartData[0].data.push(record.packets);
          this.reloadChart();
        });
      });
    this.dataTypeFlag = TYPE_OF_REQUEST.DAYS;
  }

  public getHoursData(timestamp: string): void {
    this.lineChartLabels = [];
    this.lineChartData = [{data: [], label: [this.IP]}];
    this.chartService.getHoursData(timestamp)
      .subscribe(records => {
        records.map(record => {
          this.lineChartLabels.push(record.timestamp.slice(0, 10) + ':' + record.timestamp.slice(11, 13));
          this.lineChartData[0].data.push(record.packets);
          this.reloadChart();
        });
      });
    this.dataTypeFlag = TYPE_OF_REQUEST.HOURS;
  }

  public getMinutesData(timestamp: string): void {
    this.lineChartLabels = [];
    this.lineChartData = [{data: [], label: [this.IP]}];
    this.chartService.getMinutesData(timestamp)
      .subscribe(records => {
        records.map(record => {
          this.lineChartLabels.push(record.timestamp.slice(0, 10) + ':' + record.timestamp.slice(11, 16));
          this.lineChartData[0].data.push(record.packets);
          this.reloadChart();
        });
      });
    this.dataTypeFlag = TYPE_OF_REQUEST.MINUTES;
  }

  public chartClicked(e: any): void {
    if (e.active[0]._index &&
        e.active[0]._index !== null) {
      if (this.dataTypeFlag === TYPE_OF_REQUEST.DAYS) {
        this.getHoursData(this.lineChartLabels[e.active[0]._index]);
      } else if (this.dataTypeFlag === TYPE_OF_REQUEST.HOURS) {
        this.getMinutesData(this.lineChartLabels[e.active[0]._index]);
      }
    }
  }

  public reloadChart() {
    if (this.chart !== undefined) {
      this.chart.chart.destroy();
      this.chart.chart = 0;

      this.chart.datasets = this.lineChartData;
      this.chart.labels = this.lineChartLabels;
      this.chart.ngOnInit();
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private chartService: ChartService) {
    this.dataTypeFlag = TYPE_OF_REQUEST.NONE;
    this.lineChartData = [];
    this.lineChartLabels = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataTypeFlag = TYPE_OF_REQUEST.DAYS;
    this.getDaysData();
  }

  public isDays() {
    return this.dataTypeFlag <= TYPE_OF_REQUEST.DAYS;
  }

  public isNotMinutes() {
    return this.dataTypeFlag <= TYPE_OF_REQUEST.HOURS;
  }

  public isNone() {
    return this.dataTypeFlag === TYPE_OF_REQUEST.NONE;
  }
}
