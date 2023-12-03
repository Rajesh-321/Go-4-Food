import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent {

  fooditems1:any;
  fooditems2:any; fooditems3:any; fooditems4:any;
  fooditems5:any; fooditems6:any; fooditems7:any; fooditems8:any;
  fooditems9:any;
  fooditems10:any; fooditems13:any; fooditems14:any;
  fooditems11:any; fooditems12:any; fooditems15:any; fooditems16:any;
  constructor(private service:CustomerService,private toastr:ToastrService) {
   
     

    this.fooditems1 = [
      {id:1007, name:"Jeera Rice", price:220.00, description:"No Tax is Applicable", imgsrc:"assets/Images/jeera rice.jpg"}];
      this.fooditems2=[
      {id:1008, name:"Kaju Rice",  price:210.00, description:"No Tax is Applicable", imgsrc:"assets/Images/kaju rice.jpg"}];
      this.fooditems3=[
      {id:1009, name:"Mushroom",   price:210.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mushroom.jpg"}];
      this.fooditems4=[
      {id:1010, name:"PB Masala",  price:210.00, description:"No Tax is Applicable", imgsrc:"assets/Images/Paneer Butter Masala.jpg"}];
      this.fooditems5=[
      {id:1011, name:"Veg Rice",price:180.00, description:"No Tax is Applicable", imgsrc:"assets/Images/veg rice.jpg"}];
      this.fooditems6=[
      {id:1012, name:"Veg Thaali", price:200.00, description:"No Tax is Applicable", imgsrc:"assets/Images/veg thaali.jpg"}];
      this.fooditems7=[
        {id:1012, name:"Veg Salad", price:120.00, description:"No Tax is Applicable", imgsrc:"assets/Images/veg salad.jpg"}];
  this.fooditems8 =[ {id:1012, name:"Gobi Rice", price:120.00, description:"No Tax is Applicable", imgsrc:"assets/Images/gobi rice.jpg"}];
  this.fooditems9 = [
    {id:1013, name:"Chicken Biryani",price:220.00, description:"No Tax is Applicable", imgsrc:"assets/Images/cb.jpeg.jpg"}];
    this.fooditems10=[
    {id:1014, name:"Chicken Curry",  price:120.00, description:"No Tax is Applicable", imgsrc:"assets/Images/chicken.jpg"}];
    this.fooditems11=[
    {id:1015, name:"Fish Curry",     price:220.00, description:"No Tax is Applicable", imgsrc:"assets/Images/fish.jpg"}];
    this.fooditems12=[
    {id:1016, name:"Mutton Biryani", price:320.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mb.jpg"}];
    this.fooditems13=[
      {id:1017, name:"Mutton Curry",   price:230.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mutton.jpg"}
    ];
    this.fooditems14=[
    {id:1018, name:"Prawns Curry",   price:320.00, description:"No Tax is Applicable", imgsrc:"assets/Images/prawns.jpg"}
  ];
  this.fooditems15=[
    {id:1018, name:"Chicken Mandi",   price:420.00, description:"No Tax is Applicable", imgsrc:"assets/Images/mandi.jpg"}
  ];
  this.fooditems16=[
    {id:1018, name:"Egg Briyani",   price:210.00, description:"No Tax is Applicable", imgsrc:"assets/Images/egg biryani.jpg"}
  ];

}
addToCart(fooditems: any) {
  this.service.addToCart(fooditems);
}}
