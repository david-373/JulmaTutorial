import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-report-customers',
  templateUrl: './report-customers.component.html',
  styleUrls: ['./report-customers.component.scss']
})
export class ReportCustomersComponent implements OnInit {
  customersDoughnut: any
  mostPayingDoughnut: any
  statificationDoughnut: any
  constructor() { }

  ngOnInit(): void {
    this.customersDoughnut = new Chart('customersDoughnut', {
      type: 'doughnut',

      data: {
        datasets: [{
          data: [371, 160],
          backgroundColor: ['#2cd9c5', 'aqua'],

        }],
        labels: [
          'Bought',
          'Not bought yet',

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

    this.mostPayingDoughnut = new Chart('mostPayingDoughnut', {
      type: 'doughnut',

      data: {
        datasets: [{
          data: [371, 160],
          backgroundColor: ['rgb(255 108 64)'],

        }],
        labels: [
          'customers',
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
    }),
      this.statificationDoughnut = new Chart('statificationDoughnut', {
        type: 'doughnut',

        data: {
          datasets: [{
            data: [119, 200, 66, 23, 140],
            backgroundColor: ['#ffec38', '#826af9', '#2cd9c5', '#ed1f2c', '#f3f5f8'],

          }],
          labels: [
            '5-star',
            '4-star',
            '3-star',
            '2-star',
            '0-star',
          ],
        },
        options: {

          cutoutPercentage: 65,
          rotation: Math.PI * -0.5,
          legend: {
            display: false
          },
          animation: {
            animateScale: true
          }
        }
      })
  }

}
