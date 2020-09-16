import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notafications = this.notificationsService.getNotification()


  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  removeNots(n) {
    this.notafications = this.notafications.filter((item) => {
      return item !== n;
    })
  }

}

