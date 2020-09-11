import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../../services'
@Component({
  selector: 'app-settings-region',
  templateUrl: './settings-region.component.html',
  styleUrls: ['./settings-region.component.scss']
})
export class SettingsRegionComponent implements OnInit {
  regionData = this.settingsService.getRegionTableData();

  addRegion(country, rate) {
    this.settingsService.AddRegion(country, rate)
  }

  removeRegion(region) {
    this.settingsService.RegionRemove(region)
    this.regionData = this.settingsService.getRegionTableData();
  }
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

}
