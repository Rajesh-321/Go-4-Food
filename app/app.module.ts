import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { LogoutComponent } from './logout/logout.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { TablesComponent } from './tables/tables.component';
import { TableBookComponent } from './table-book/table-book.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { ShowtablesComponent } from './showtables/showtables.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

import { HotdrinksComponent } from './hotdrinks/hotdrinks.component';
import { CooldrinksComponent } from './cooldrinks/cooldrinks.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomePageComponent,
    LogoutComponent,
    FooditemsComponent,
    TablesComponent,
    TableBookComponent,
    AboutusComponent,
    FooterComponent,
    VeggiesComponent,
    CartComponent,
    ContactComponent,
    ShowtablesComponent,
    ForgotpasswordComponent,
    BreakfastComponent,
    HotdrinksComponent,
      CooldrinksComponent,
      ResetPasswordComponent,
      MakepaymentComponent,
      PurchaseComponent,
      ConfirmationComponent
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
