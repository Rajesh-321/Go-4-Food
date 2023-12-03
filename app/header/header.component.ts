import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  loginStatus: any;
  service: any;
  cartItems: any;

  
  constructor(private services: CustomerService,private router:Router) 
    
{
    this.cartItems=services.cartItems;
}
  

  // ngOnInit() {
  //   this.service.getLoginStatus().subscribe((data: any) => {
  //     this.loginStatus = data;
  //     console.log(this.loginStatus);
      
  //   });
  // }
   userLogutSatus():boolean
   {
        return this.services.getUserLoggedStatus();
   }
    click(): void{
      this.router.navigate(['table-book']);
    }
}
