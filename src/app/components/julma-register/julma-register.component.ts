import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-julma-register',
  templateUrl: './julma-register.component.html',
  styleUrls: ['./julma-register.component.scss']
})
export class JulmaRegisterComponent implements OnInit {
  goToJulma() {
    this.router.navigate(['julma'])
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
