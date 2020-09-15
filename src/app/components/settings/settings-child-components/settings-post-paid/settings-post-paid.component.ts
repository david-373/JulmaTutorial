import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../services';
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
      data: {}
    })
  }
  constructor(private settingsService: SettingsService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
