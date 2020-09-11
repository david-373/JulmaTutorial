import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-report-sales',
  templateUrl: './report-sales.component.html',
  styleUrls: ['./report-sales.component.scss'],

})
export class ReportSalesComponent implements OnInit {

  salesDate = [
    { title: 'Total Sales', date: 50000 },
    { title: 'Comisions', date: 5 },
    { title: 'Discount', date: 2500 },
    { title: 'Net Profit', date: 47500 }
  ];
  orderChartData = [2653, 138, 985];
  DoughnutChart: any;
  constructor() {

  }

  ngOnInit(): void {

    this.DoughnutChart = new Chart('doughChart', {
      type: 'doughnut',

      data: {
        datasets: [{
          data: this.orderChartData,
          backgroundColor: ['#bfb884', 'red', '#e8f7f2',],
          borderWidth: 0,

        }],

        labels: [
          'Delivered',
          'Rejected',
          'Requested',
        ],

      },
      options: {

        cutoutPercentage: 75,
        rotation: Math.PI * -0.5,
        legend: {
          display: false
        },
        animation: {
          animateScale: true
        }
      }
    });
  }

}
