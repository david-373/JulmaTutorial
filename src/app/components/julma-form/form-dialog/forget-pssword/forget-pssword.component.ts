import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../julma-form.component'
@Component({
  selector: 'app-forget-pssword',
  templateUrl: './forget-pssword.component.html',
  styleUrls: ['./forget-pssword.component.scss']
})
export class ForgetPsswordComponent {
  emailCheck = false
  emailChecked() {
    this.emailCheck = !this.emailCheck
  }
  constructor(
    public dialogRef: MatDialogRef<ForgetPsswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



  onNoClick(): void {
    this.dialogRef.close()

  }

}
