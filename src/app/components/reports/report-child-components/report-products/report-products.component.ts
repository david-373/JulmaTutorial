import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportsService } from '../../../../services'
@Component({
  selector: 'app-report-products',
  templateUrl: './report-products.component.html',
  styleUrls: ['./report-products.component.scss']
})
export class ReportProductsComponent implements OnInit {
  productsProgress = this.reportsService.getProductsData()
  stepSizing = 1000
  barChart: any
  monthlySelected = false
  onSelectMonthly() {
    this.monthlySelected = !this.monthlySelected
  }
  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {

    this.barChart = new Chart('barChart', {
      type: 'bar',

      options: {


        scales: {

          yAxes: [
            {

              type: 'logarithmic',
              ticks: {
                min: 0,
                max: 100000,
                stepSize: this.stepSizing,
                callback: function (value, index, values): any {
                  if (value == 1000) {
                    this.stepSizing = 3000
                    return 1000
                  }
                  if (value == 4000) {
                    this.stepSizing = 4000
                    return 4000
                  }
                  if (value == 8000) {
                    this.stepSizing = 92000
                    return 8000
                  }
                  if (value == 100000) {
                    return 100000
                  }

                }
              },
              gridLines: {

                display: false
              },
            },
          ],
          xAxes: [{
            gridLines: {
              drawBorder: false,
              display: true,
              color: '#c296df1f',
              lineWidth: 2,


            },
          }
          ]
        },
        legend: {
          display: false,
        },

      },

      data: {
        labels: ["7/12", "8/12", "9/12", "10/12", "11/12", "12/12", "13/12", "14/12", "15/12", "16/12", "17/12", "18/12", "19/12", "20/12"],
        datasets: [{
          categoryPercentage: 0.4,
          backgroundColor: '#6868d6',
          data: this.productsProgress
        }]
      }

    });
  }

}
