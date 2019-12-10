import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  isNone: string = 'block';
  DP : string;
  constructor() { }

  ngOnInit() {
    document.getElementById("mySidebar").style.display = this.isNone;
    if(localStorage.getItem("imageUrl") )
    this.DP = localStorage.getItem("imageUrl")  
    else
    this.DP ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
  }

  side_menu_open() {
    if (this.isNone == 'block') {
      document.getElementById("mySidebar").style.display = this.isNone;
      this.isNone = "none"
    }

    else {
      document.getElementById("mySidebar").style.display = this.isNone;
      this.isNone = "block"
    }
  }

  wside_menu_open() {

  }
}