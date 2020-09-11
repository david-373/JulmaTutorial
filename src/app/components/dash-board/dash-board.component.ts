import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { DashBoardService } from '../../services'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  countDebits: number
  orderChartData = [985, 2653, 138,];
  detalisProgressData = this.dashBoardService.getSalesDetalisData()
  deales = this.dashBoardService.getDeales()
  LineChart: any;
  DoughnutChart: any;
  statusSelected = false;
  monthlySelected = false;
  onSelectMonthly() {
    this.monthlySelected = !this.monthlySelected
  }
  monthlyForSelected = false;
  onSelectMonthlyFor() {
    this.monthlyForSelected = !this.monthlyForSelected
  }
  onSelectStatus() {
    this.statusSelected = !this.statusSelected
  }
  statusForSelected = false;
  onSelectForStatus() {
    this.statusForSelected = !this.statusForSelected
  }
  constructor(private dashBoardService: DashBoardService) { }
  ngOnInit(): void {
    this.DoughnutChart = new Chart('doughChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.orderChartData,
          backgroundColor: ['#9d9de8', '#e0d3b9', 'red',],
          borderWidth: 0,
        }],
        labels: [
          'Pending',
          'Delivered',
          'Rejected',
        ]
      },
      options: {
        cutoutPercentage: 75,
        rotation: Math.PI * 0.5,
        legend: {
          display: false
        },
        animation: {
          animateScale: true
        }
      }
    });
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"],
        datasets: [{
          data: this.detalisProgressData,
          fill: false,
          lineTension: 0.2,
          borderColor: "#8989ff",
          borderWidth: 3,
          pointBorderColor: '#d6d680',
        }],
      },
      options: {
        tooltips: {
          backgroundColor: '#3434dab8',
          bodyFontSize: 12,
          bodyFontColor: 'white',
          callbacks: {
            label: function (tooltipItems) {
              return tooltipItems.value + '$'
            }
          }
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 1000,
                max: 200000,
                maxTicksLimit: 5,
              },
              gridLines: {
                display: true,
                color: '#c296df1f',
                lineWidth: 2,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,

              },
            }
          ]
        },
      },
    })
  }
}
