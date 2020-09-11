import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPsswordComponent } from './form-dialog/forget-pssword/forget-pssword.component'

export interface DialogData {
  email: string
  verficatione1: number
  verficatione2: number
  verficatione3: number
  verficatione4: number
}

@Component({
  selector: 'app-julma-form',
  templateUrl: './julma-form.component.html',
  styleUrls: ['./julma-form.component.scss']
})
export class JulmaFormComponent implements OnInit {
  forgetPsswordData?= []

  fullControl: FormGroup;
  constructor(private router: Router, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgetPsswordComponent, {

    })
    dialogRef.afterClosed().subscribe(result => {
      this.forgetPsswordData = result

    })
  }

  ngOnInit(): void {
    this.fullControl = new FormGroup({
      nameControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      emailControl: new FormControl('', [Validators.email, Validators.required])
    })
  }

  singIn() {
    this.router.navigate(['julma'])
  }
}
