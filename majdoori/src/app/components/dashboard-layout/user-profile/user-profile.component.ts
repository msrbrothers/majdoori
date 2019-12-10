import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms'
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;
  images;
  base64textString: String = "";
  DP: string;
  constructor(private fb: FormBuilder, private LoginService: LoginService) {

    this.form = fb.group({
      fName: [localStorage.getItem("fName")],
      lName: [localStorage.getItem("lName")],
      imgUrl: [null],
      email: [localStorage.getItem("email")],
      phoneNo: [localStorage.getItem("phoneNo")],

    })

  }

  ngOnInit() {
    console.log(this.form.value);
    if (localStorage.getItem("imageUrl"))

      this.base64textString = localStorage.getItem("imageUrl")
    else
      this.base64textString = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  updateFrofile() {
    if (this.images) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.images);
    }
    else {
      this.profileUpdate()
    }

  }
  _handleReaderLoaded(readerEvt) {
    console.log("jisisiqsiqisqhiqhiqhiqhiqheiqeh");
    var binaryString = readerEvt.target.result;
    this.base64textString = "data:image/png;base64,"+ btoa(binaryString);
    this.profileUpdate()
  }

  profileUrl = '';

  profileUpdate() {
    var body = {
      jToken: localStorage.getItem("token"),
      imageUrl: this.base64textString,
      _id: localStorage.getItem("userId"),
      fName: this.form.value.fName,
      lName: this.form.value.lName,
      email: this.form.value.email,
      phoneNo: this.form.value.phoneNo
    }
    console.log("body", body);

    this.LoginService.updateProfile(body).subscribe(data => {
      if (data) {
        alert("your profile has been successfully updated")
      }
    })
  }
}
