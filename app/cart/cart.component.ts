import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  quantity:any
  total:any;

  constructor(private service: CustomerService,private payment:PaymentService,private router:Router ) {
    this.cartItems = [];
    this.total=0;
  }
ngOnInit(): void {
    this.cartItems=this.service.cartItems;
    this.cartItems.forEach((item:any)=>{
      this.total=this.total+item.price;
    })
}
  deleteCartItem(fooditems: any) {
    const i = this.cartItems.findIndex((element: any) => {
      return element.id == fooditems.id;
    

    });

    this.cartItems.splice(i, 1);
  }
  purchase(){
    this.payment.totalAmount=this.total;
    this.router.navigate(['paypal']);
  }
}


