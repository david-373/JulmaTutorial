import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js"
@Component({
  selector: 'app-report-visitors',
  templateUrl: './report-visitors.component.html',
  styleUrls: ['./report-visitors.component.scss']
})
export class ReportVisitorsComponent implements OnInit {
  visitorsDoughunt: any;
  devicesPie: any
  constructor() { }

  ngOnInit(): void {
    this.devicesPie = new Chart('devicesPie', {
      type: 'pie',
      data: {

        labels: ['windows', 'iOS', 'Android', 'Mac', 'Linux'],

        datasets: [{
          data: [512, 214, 365, 210, 200],
          backgroundColor: ['#826af9', '#2d99ff', '#ffe700', '#2cd9c5', '#505d6f'],
          borderWidth: 0
        }]
      },
      options: {
        cutoutPercentage: 0,
        legend: {
          display: false
        },
        animation: {
          animateScale: true
        }
      }
    })
    this.visitorsDoughunt = new Chart('visitorsDoughunt', {
      type: 'doughnut',
      data: {

        datasets: [
          {

            data: [420, 80],

            backgroundColor: ['rgb(255 231 0)', 'aqua'],
            borderWidth: 3,

          },
          {
            data: [250, 250],
            backgroundColor: ['rgb(44 217 197)', 'aqua'],
            borderWidth: 3,

          }, {
            data: [100, 400],
            backgroundColor: ['rgb(45 153 255)', 'aqua'],
            borderWidth: 3,

          }]
      },
      options: {

        cutoutPercentage: 55,
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
