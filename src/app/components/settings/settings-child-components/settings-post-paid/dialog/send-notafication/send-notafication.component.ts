import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostPaidDialogData } from '../dialog-data'
import { NotificationsService } from '../../../../../../services/notifications.service'
@Component({
  selector: 'app-send-notafication',
  templateUrl: './send-notafication.component.html',
  styleUrls: ['./send-notafication.component.scss']
})
export class SendNotaficationComponent implements OnInit {
  notificationText: string
  sendNotification() {
    this.notificationService.pushNewNotification(this.data, this.notificationText)
    this.close()
  }
  constructor(public dialogRef: MatDialogRef<SendNotaficationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostPaidDialogData,
    private notificationService: NotificationsService) { }

  close() {
    this.dialogRef.close()
  }
  ngOnInit(): void {

  }

}
