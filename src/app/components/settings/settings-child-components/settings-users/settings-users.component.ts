import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services';
@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent implements OnInit {
  public dataTble = this.settingsService.getUserTableData()
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

}
