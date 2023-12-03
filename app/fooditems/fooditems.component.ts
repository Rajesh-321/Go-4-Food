import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent {
  fooditems: any;
  services:  any;
  fooditems1:any;
  fooditems2:any;
  fooditems3:any;
  fooditems4:any;

  constructor(private service:CustomerService,private toastr:ToastrService) {
   
     

    this.fooditems1 = [
      {id:1007, name:"Jeera Rice", price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/jeera rice.jpg"},
      {id:1008, name:"Kaju Rice",  price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/kaju rice.jpg"},
      {id:1009, name:"Mushroom",   price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mushroom.jpg"},
      {id:1010, name:"PB Masala",  price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/Paneer Butter Masala.jpg"},
      {id:1011, name:"Veg Biryani",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/veg rice.jpg"},
      {id:1012, name:"Veg Thaali", price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/veg thaali.jpg"}
    ];

    this.fooditems2 = [
      {id:1013, name:"Chicken Biryani",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/cb.jpeg"},
      {id:1014, name:"Chicken Curry",  price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/chicken.jpg"},
      {id:1015, name:"Fish Curry",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/fish.jpg"},
      {id:1016, name:"Mutton Biryani", price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mb.jpg"},
      {id:1017, name:"Mutton Curry",   price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mutton.jpg"},
      {id:1018, name:"Prawns Curry",   price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/prawns.jpg"}
    ];

    this.fooditems3 = [
      {id:1019, name:"Coca Cola",   price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/coca cola.jpg"},
    //  {id:1020, name:"Fanta",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/fanta.jpg"},
      {id:1021, name:"Mountain Dew",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mountain dew.jpg"},
      {id:1022, name:"Pepsi",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/pepsi.jpg"},
      {id:1023, name:"Sprite",      price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/sprite.jpg"},
      {id:1024, name:"Thums Up",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/thums up.png"}
    ];

    this.fooditems4 = [
      {id:1025, name:"Black Coffee", price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/black coffee.jpg"},
      {id:1026, name:"Coffee",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/coffee.jpg"},
      {id:1027, name:"Green Tea",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/green tea.jpg"},
      {id:1028, name:"Hot Chocolate",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/hot chocolate.jpg"},
      {id:1029, name:"Lemon Tea",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/lemon tea.jpg"},
      {id:1030, name:"Tea",          price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/tea.jpg"}
    ];
  }
  addToCart(fooditems: any) {
    this.service.addToCart(fooditems);
    this.toastr.success("Added to Cart");
  }

  addToCart1(fooditems1: any) {
    this.service.addToCart(fooditems1);
    this.toastr.success("Added to Cart");
  }

  addToCart2(fooditems2: any) {
    this.service.addToCart(fooditems2);
    this.toastr.success("Added to Cart");
  }

  addToCart3(fooditems3: any) {
    this.service.addToCart(fooditems3);
    this.toastr.success("Added to Cart");
  }

  addToCart4(fooditems4: any) {
    this.service.addToCart(fooditems4);
    this.toastr.success("Added to Cart");
  }
}