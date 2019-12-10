import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isHeaeder = new BehaviorSubject<any>("true");
  constructor() { }
}
