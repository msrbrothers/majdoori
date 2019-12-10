import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
// import Stepper from 'bs-stepper';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpform;


  constructor(private _LoginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpform = this.formBuilder.group({
      fName: '',
      lName: '',
      password: '',
      confirmPass: '',
      email: '',
      phoneNo: '',
      gendar: '',
      age: ''
    });
  }

  onSubmit(value) {
    console.log(this.signUpform );
    
    var body = {
      fName: this.signUpform.value.fName,
      lName: this.signUpform.value.lName,
      password: this.signUpform.value.password,
      email: this.signUpform.value.email,
      phoneNo: this.signUpform.value.phoneNo,
      gendar: this.signUpform.value.gendar,
      age: this.signUpform.value.age,
      imageUrl: ''
    }
    this._LoginService.sigup(body)

  }
}


























  // profileForm = new FormGroup({
  //      lable1 : new FormGroup({
  //       name: new FormControl(''),
  //       age: new FormControl(''),
  //      }),
  //      lable2 : new FormGroup({
  //       name: new FormControl(''),
  //       age: new FormControl(''),
  //      }),
  //      lable3 : new FormGroup({
  //       name: new FormControl(''),
  //       age: new FormControl(''),
  //      }),
  //      lable4 : new FormGroup({
  //       name: new FormControl(''),
  //       age: new FormControl(''),
  //      }),
  //      lable5 : new FormGroup({
  //       name: new FormControl(''),
  //       age: new FormControl(''),
  //      })
  // });
