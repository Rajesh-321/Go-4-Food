
import { Component } from '@angular/core';

import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hotelEntity: any;
  
  constructor(private router:Router,private service: CustomerService,private toastr:ToastrService) {
    this.hotelEntity = {
      "sno": "",
      "firstName": "",
      "lastName": "",
      "gender": "",
      "phone": "",
      "emailId": "",
      "password": ""
    };

    

  }
  userRegister(regForm: any) {
    console.log(regForm);
    
    this.hotelEntity.firstName = regForm.firstname;
    this.hotelEntity.lastName = regForm.lastname;
    this.hotelEntity.gender = regForm.gender;
    this.hotelEntity.phone = regForm.phoneNumber;
    this.hotelEntity.emailId = regForm.emailId;
    this.hotelEntity.password = regForm.password;

    console.log(this.hotelEntity);
    

    this.service.userRegister(this.hotelEntity).subscribe((data: any) => {
      console.log(data);
    })

    if(this.hotelEntity!=null)
    {
         this.toastr.success("Registered Successfully");
         this.router.navigate(['login'])
         this.service.setUserLoggedIn();

         
    }
        else{
          alert('Please Enter All Required Details');
        }
  
  }


 isPasswordValid(password: string): boolean {
    const uppercase = /[A-Z]/;
    if (!uppercase.test(password)) {
      return false;
    }
    const lowercase = /[a-z]/;
    if (!uppercase.test(password)) {
      return false;
    }

    const specialCharacter = /[$@#]/;
    if (!specialCharacter.test(password)) {
      return false;
    }
    const numbers = /[0-9]/;
    if(!numbers.test(password)){
      return false;
    }

    return true; 
  }

  isPhoneNumberValid(phone: string):boolean{

    const pattern = /^[6-9]\d{9}$/;
    if (!pattern.test(phone)){
      return false;
    }

    return true;

  }
   

}



