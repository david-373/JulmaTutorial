import { Component, OnInit, Optional } from '@angular/core';
import { SettingsService } from 'src/app/services';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from './dialog/edit-user/edit-user.component';
import { DetalisComponent } from './dialog/user-detalis/detalis/detalis.component';
import { AddUserComponent } from './dialog/add-user/add-user.component'
@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent implements OnInit {
  public dataTble = this.settingsService.getUserTableData();
  name: string
  job: string
  email: string
  mobile: number
  location: string
  avilable: string
  ch1: string
  ch2: string
  ch3: string
  ch4: string
  ch5: string
  ch6: string
  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
      this.settingsService.addUser(result)
    })
  }
  removeUser(data) {
    this.dataTble = this.settingsService.removeUser(data)
  }
  editUser(i): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result[0]
      this.job = result[1]
      this.email = result[2]
      this.mobile = result[3]
      this.location = result[4]
      if (result[5]?.checked) {
        this.ch1 = result[5].value
      } else {
        this.ch1 = undefined
      }
      if (result[6]?.checked) {
        this.ch2 = result[6].value
      } else {
        this.ch2 = undefined
      }
      if (result[7]?.checked) {
        this.ch3 = result[7].value
      } else {
        this.ch3 = undefined
      }
      if (result[8]?.checked) {
        this.ch4 = result[8].value
      } else {
        this.ch4 = undefined
      }
      if (result[9]?.checked) {
        this.ch5 = result[9]?.value
      } else {
        this.ch5 = undefined
      }
      if (result[10]?.checked) {
        this.ch6 = result[10].value
      } else {
        this.ch6 = undefined
      }
      this.settingsService.editUserData(i, this.name, this.job, this.email, this.mobile, this.location, this.ch1, this.ch2,
        this.ch3,
        this.ch4,
        this.ch5,
        this.ch6)
    });
  }
  openUserAllData(i) {
    const dialogRef = this.dialog.open(DetalisComponent, {
      data: {
        singelUser: this.settingsService.UserTableData[i]
      }
    });
    dialogRef.componentInstance.remove.subscribe((data: any) => {
      this.dataTble = this.settingsService.removeUser(data.singelUser)
    })
  }
  constructor(private settingsService: SettingsService, public dialog: MatDialog) { }

  ngOnInit(): void { }
}
