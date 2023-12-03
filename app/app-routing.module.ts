import { CartComponent } from './cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { authGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TableBookComponent } from './table-book/table-book.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { ContactComponent } from './contact/contact.component';
import { ShowtablesComponent } from './showtables/showtables.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { HotdrinksComponent } from './hotdrinks/hotdrinks.component';
import { CooldrinksComponent } from './cooldrinks/cooldrinks.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { PurchaseComponent } from './purchase/purchase.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"login",  component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"homepage", component:HomePageComponent},
  {path:"logout",component:LogoutComponent },
  {path:"fooditems", component:FooditemsComponent},
  {path:"login/register", component:RegisterComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"table-book",component:TableBookComponent},
  {path:"fooditems/veggies",component:BreakfastComponent},
  {path:"fooditems/hotdrinks",component:HotdrinksComponent},
  {path:"fooditems/cooldrinks",component:CooldrinksComponent},
  {path:"fooditems/breakfast",component:VeggiesComponent},
  {path:"cart",component:CartComponent},
  {path:"contact",component:ContactComponent},
  {path:"showtables",component:ShowtablesComponent},
  {path:"login/forgotpassword",component:ForgotpasswordComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"login/forgotpassword/register",component:RegisterComponent},
  {path:"login/forgotpassword/login",component:LoginComponent},
  
  {path:"paypal",component:PurchaseComponent},
  {path:"conformation",component:ConfirmationComponent}

];

  



  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  