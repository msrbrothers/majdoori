import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
//import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  userData: any
  constructor(private _LoginService: LoginService, private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }
  onSubmit(value) {
    this._LoginService.logIn(value).subscribe(data => {
      this.userData = data;
      console.log(data);

      if (this.userData.status == "success") {
          this.localStorage();
        this.router.navigate(['/majdoori/dashboard']);
      }
      else{
        alert("something went wromg please try again")
      }
    }, (err) => {
      alert("something went wromg please try again")
    })

  }

  localStorage(){
    localStorage.setItem("token", this.userData.token);
    localStorage.setItem("fName", this.userData.data.fName);
    localStorage.setItem("lName", this.userData.data.lName);
    localStorage.setItem("email", this.userData.data.email);
    localStorage.setItem("phoneNo",this.userData.data.phoneNo);
    localStorage.setItem("userId",this.userData.data._id);
    localStorage.setItem("imageUrl",this.userData.data.imageUrl);
  }
}
