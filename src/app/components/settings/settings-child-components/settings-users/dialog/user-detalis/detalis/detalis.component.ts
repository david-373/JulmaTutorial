import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/julma-form/julma-form.component';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss']
})
export class DetalisComponent implements OnInit {
  @Output() remove = new EventEmitter<any>()
  @Output() Onedit = new EventEmitter<any>()

  singelUserData: any
  constructor(
    public dialogRef: MatDialogRef<DetalisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  removeUser() {
    this.remove.emit(this.data)
  }
  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.singelUserData = this.data
  }
}
