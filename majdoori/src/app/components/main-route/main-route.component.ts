import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
@Component({
  selector: 'app-main-route',
  templateUrl: './main-route.component.html',
  styleUrls: ['./main-route.component.css']
})
export class MainRouteComponent implements OnInit {
  isHeader : string = "block";
  constructor(private CommonService :CommonService) { }
  ngOnInit() {  }
  ngAfterViewInit(){
    this.CommonService.isHeaeder.subscribe(isHeader => {
      setTimeout(() => {
        this.isHeader = isHeader;
      }, 100);
     
  })
  }

  changeOfRoutes(){
    console.log("jjfsajfajfajfoa");
    
  }

}
