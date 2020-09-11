import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users = this.customersService.getUsers()

  customerActiv = false;
  onSelectCustomer() {
    this.customerActiv = !this.customerActiv
  };
  locationActiv = false;
  onSelectLocation() {
    this.locationActiv = !this.locationActiv
  };
  activityActiv = false;
  onSelectActivity() {
    this.activityActiv = !this.activityActiv
  };
  genderActiv = false;
  onSelectGender() {
    this.genderActiv = !this.genderActiv
  }
  customActiv = false;
  onCustomSelect() {
    this.customActiv = !this.customActiv
  }
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

}
