import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  side_menu_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  side_menu_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
}
