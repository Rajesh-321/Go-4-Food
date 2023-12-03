import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hotelEntity: any;
  captchaText: string = '';


  constructor(private router: Router, private service: CustomerService, private toastr:ToastrService) {
    this.refreshCaptcha();
  }
  refreshCaptcha() {
    this.captchaText = this.generateRandomCaptcha(); // Replace with your CAPTCHA generation logic
  }

  generateRandomCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 6; // Adjust the length as needed
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }


  async validateLogin1(loginForm: any) {
    if (loginForm.captcha !== this.captchaText) {
      this.toastr.error("CAPTCHA is incorrect");
      return;
    }

  }
  async validateLogin(loginForm: any) {
    console.log(loginForm);
    localStorage.setItem("emailId", loginForm.emailId);

    if (loginForm.emailId == "go4food@gmail.com" && loginForm.password == "Hr123@") {
      this.service.setUserLoggedIn();
      this.router.navigate(['showtables']);
    
     
 
    } else {

      await this.service.customerLogin(loginForm).then((data: any) => {
        console.log(data);
        this.hotelEntity = data;

      });


    }
    if (this.hotelEntity != null) {

      this.service.setUserLoggedIn();
     // this.toastr.success("Login Successfully");
      this.router.navigate(['table-book'])
    }
    else {
     // this.toastr.error("Invalid Credentials");
     
    }
   /* if (this.hotelEntity == null) {

      //this.service.setUserLoggedOut();
      this.router.navigate(['register'])
    }*/

  }




}

