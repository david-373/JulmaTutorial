import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../services'
@Component({
  selector: 'app-settings-post-paid',
  templateUrl: './settings-post-paid.component.html',
  styleUrls: ['./settings-post-paid.component.scss']
})
export class SettingsPostPaidComponent implements OnInit {
  whiteListData = this.settingsService.getPostPaidWhiteListData()
  blackListData = this.settingsService.getPostPaidBlackListData()
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

}
