import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrls: ['./veggies.component.css']
})
export class VeggiesComponent {
  veggies: any;
  veggies1: any;
  veggies2: any;
  veggies3: any;
  veggies4: any;
  veggies5: any;
  veggies6:any;
  veggies7:any;
  veggies8:any;
  
  fooditems: any;
  
  constructor( private service:CustomerService) {
    this.veggies = [
      {id:1001, name:"Bonda",    price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1001.jpeg.jpg"}];
      this.veggies1=[
      {id:1002, name:"Chapati",  price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1002.jpeg.jpg"}];
        this.veggies2=[{id:1003, name:"Dosa",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1003.png"}];
        this.veggies3=[ {id:1004, name:"Pongal",  price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1004.png"}];
      this.veggies4=[   {id:1005, name:"Ponganalu",price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1005.png"}];
       this.veggies5=[ {id:1006, name:"Puri",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1006.png"}];
      
       this.veggies6=[ {id:1006, name:"Idly",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/idly.jpg"}];
       this.veggies7=[ {id:1006, name:"Uggani",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/uggani.jpg"}];
       this.veggies8=[ {id:1006, name:"Puri",     price:20.00, description:"No Tax is Applicable", imgsrc:"assets/Images/1006.png"}];
    
  }
  addToCart(fooditems: any) {
    this.service.addToCart(fooditems);
  }
  
  


}
