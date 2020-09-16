import { Component, Inject, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostPaidDialogData } from '../dialog-data'
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  @Output() addNewCustomer = new EventEmitter<any>()
  @ViewChild('dynamic', { static: false }) private dynamicRef: ElementRef<HTMLElement>;
  get value() {
    return this.dynamicRef.nativeElement.innerHTML;
  }
  search = '';
  searchResult
  addCustomer() {
    this.searchResult = this.value
    this.addNewCustomer.emit(this.searchResult)
  }
  folderObjs = this.data.data
  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostPaidDialogData
  ) { }
  ngOnInit() { }

}
