import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  search = '';


  folderObjs = [{
    name: 'Folder1',
    size: '12mb'
  }, {
    name: 'Folder2',
    size: '10mb'
  }, {
    name: 'Folder3',
    size: '2mb'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
