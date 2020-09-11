import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notafications = [
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    { fullName: 'Name Name', message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  removeNots(n) {
    this.notafications = this.notafications.filter((item) => {
      return item !== n;
    })
  }

}

