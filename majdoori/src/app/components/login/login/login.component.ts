import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   form  ;
   userData:any
  constructor( private _LoginService : LoginService,private formBuilder : FormBuilder) {
   
   }

  ngOnInit() {
  
    this.form = this.formBuilder.group({
      email:'',
      password:''
    })
  }
  onSubmit(value){
    console.log(value);
   this._LoginService.logIn(value).subscribe(data=>{
     this.userData =data;
     if(this.userData.status=="success"){
      localStorage.setItem("token",this.userData.token);
      localStorage.setItem("fName",this.userData.data.fName);
      localStorage.setItem("lName",this.userData.data.lName);
      localStorage.setItem("lName",this.userData.data.phoneNo);
      localStorage.setItem("lName",this.userData.data.age);
      localStorage.setItem("email",this.userData.email)
    }
   },(err)=>{

   })
   
  }
}
