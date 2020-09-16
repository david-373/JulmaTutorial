import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../services';
import { SendNotaficationComponent } from './dialog/send-notafication/send-notafication.component'
import { AddCustomerComponent } from './dialog/add-customer/add-customer.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-settings-post-paid',
  templateUrl: './settings-post-paid.component.html',
  styleUrls: ['./settings-post-paid.component.scss']
})
export class SettingsPostPaidComponent implements OnInit {
  whiteListData = this.settingsService.getPostPaidWhiteListData()
  blackListData = this.settingsService.getPostPaidBlackListData()
  addCustomer() {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      data: {
        data: this.settingsService.getUserTableData()
      }
    })
    dialogRef.componentInstance.addNewCustomer.subscribe((data) => {
      console.log(data)
      this.settingsService.pushNewCustomer(data)
    })
  }
  openSendNotafication(name) {
    const dialogRef = this.dialog.open(SendNotaficationComponent, {
      data: {
        name
      }

    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

    })
  }
  constructor(private settingsService: SettingsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
