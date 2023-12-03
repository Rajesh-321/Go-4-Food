import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-hotdrinks',
  templateUrl: './hotdrinks.component.html',
  styleUrls: ['./hotdrinks.component.css']
})
export class HotdrinksComponent {
  fooditems17:any;
  fooditems18:any; fooditems19:any; fooditems20:any; fooditems21:any; fooditems22:any; fooditems23:any;fooditems24:any;

  constructor( private service:CustomerService) {
  this.fooditems17 = [
    {id:1025, name:"Black Coffee", price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/black coffee.jpg"}];
    this.fooditems18=[
    {id:1026, name:"Coffee",       price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/coffee.jpg"}];
    this.fooditems19=[
    {id:1027, name:"Green Tea",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/green tea.jpg"}];
    this.fooditems20=[
    {id:1028, name:"Hot Chocolate",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/hot chocolate.jpg"}];
    this.fooditems21=[
    {id:1029, name:"Lemon Tea",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/lemon tea.jpg"}];
    this.fooditems22=[
    {id:1030, name:"Tea",          price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/tea.jpg"}];
    this.fooditems23=[
      {id:1030, name:"Badam Tea",          price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/badam tea.jpg"}];
      this.fooditems24=[
        {id:1030, name:"Ragi Malt",          price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/ragi malt.jpg"}];
    
  }
  addToCart(fooditems: any) {
    this.service.addToCart(fooditems);
  }
  
}
