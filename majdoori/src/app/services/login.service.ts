import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable()
export class LoginService {

  HttpOptions : any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http : HttpClient ) { }

  sigup(data){
   return this.http.post('http://localhost:3000/singup',data).subscribe(response => {
    console.log(response);
   }) ;
 
  }
  logIn(body){
     return this.http.post('http://localhost:3000/login',body)
  }
}
