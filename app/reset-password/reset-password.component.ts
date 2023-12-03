import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

function passwordMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')!.value;
  const passwordConfirmation = formGroup.get('passwordConfirmation')!.value;

  return password === passwordConfirmation ? null : { passwordsDoNotMatch: true };
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  passwordForm: FormGroup;
  sharedData: string | undefined;
  emailId: any;
Otp:any;
 user:any;
  constructor(private formBuilder: FormBuilder ,private service:CustomerService,private toastr:ToastrService,private router:Router) {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
    }, { validators: passwordMatchValidator });

    this.emailId = localStorage.getItem("emailId");

  }

  onSubmit() {

    if (this.passwordForm.valid) {

      const password1 = this.passwordForm.get('password')?.value;
      console.log(password1);
      console.log(this.emailId);
      
      this.service.resetpassword(this.emailId,password1).subscribe((data:any)=>{
        console.log(data);
        this.user=data;
        if(this.user != null){
          this.toastr.success("password updated success fully");
          this.router.navigate(['login']);
        }
        else{
          this.toastr.error("error");
        }
      });
     

    } else {
      // Form is invalid; handle errors or prevent submission.
    }
  }
}