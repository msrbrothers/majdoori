import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-layout',
  templateUrl: './outside-layout.component.html',
  styleUrls: ['./outside-layout.component.css']
})
export class OutsideLayoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
