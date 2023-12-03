import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cooldrinks',
  templateUrl: './cooldrinks.component.html',
  styleUrls: ['./cooldrinks.component.css']
})
export class CooldrinksComponent {
  fooditems24:any;
  fooditems25:any;
  fooditems26:any;
  fooditems27:any;
  fooditems28:any;
  fooditems29:any;
  fooditems30:any;
  fooditems31:any;
  fooditems32:any;


  constructor(private service:CustomerService,private toastr:ToastrService) {
  this.fooditems24 = [
    {id:1019, name:"Coca Cola",   price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/coca cola.jpg"}];

  // {id:1020, name:"Fanta",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/fanta.jpg"},
  this.fooditems25=[ {id:1021, name:"Mountain Dew",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mountain dew.jpg"}];
  this.fooditems26=[ {id:1022, name:"Pepsi",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/pepsi.jpg"}];
  this.fooditems27=[ {id:1023, name:"Sprite",      price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/sprite.jpg"}];
  this.fooditems28=[{id:1024, name:"Thums Up",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/thums up.png"}];
  this.fooditems29=[{id:1024, name:"Mazza",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/maaza.jpg"}];
  this.fooditems30=[{id:1024, name:"7 Up",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/7 up.png"}];
  this.fooditems31=[{id:1024, name:"veg Salad",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/fanta.jpg"}];
}
addToCart(fooditems25: any) {
  this.service.addToCart(fooditems25);
}

}

