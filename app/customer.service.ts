import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  isUserLogged: boolean = false;
  cartItems: any;
 
  

  constructor(private http: HttpClient) { 
    this.cartItems=[];
  }
  userRegister(hotelEntity: any){
    return this.http.post('registerCustomer',hotelEntity);
  }

  customerLogin(hotelEntity: any) {
    return this.http.get('loginByEmail/' + hotelEntity.emailId + "," + hotelEntity.password).toPromise();
  }
 tableStatus(status:any)
 {
         return this.http.get('getAll/'+ status).toPromise();
 }
 updateTableStatus(status:any)
 {
      // return this.http.put('updateTableActive',status);
      return this.http.post('registerTableActive',status);
 }

 bookingDates(date:any)
 {
  return this.http.get('getAllDates/'+ date).toPromise();
 }

 tableOrderDetails(details:any)
 {
        return this.http.post('registerOrder',details);
 }
 getCustomerTableDetails(): any {
  return this.http.get('getOrderedDetails');
}


deleteCustomer(sno:any)
{
  return this.http.delete('deleteCustomer/'+sno);
}
getDates():any
{
  return this.http.get('getAllDates');
}
registerTableActive(data:any)
{
  return this.http.post('registerTableActive',data);
}
setUserLoggedIn() {
  this.isUserLogged = true;
}
  setUserLoggedOut() {
    this.isUserLogged = false;
  }
  getUserLoggedStatus(): boolean {
    return this.isUserLogged;
  }
  addToCart(fooditems: any) {
    this.cartItems.push(fooditems);
  }
  getCartItems(): any {
    return this.cartItems;
  }

  forgetOtp(emailId: any) {
    return this.http.post("getEmailOtp/"+emailId,null);
  }

  otpVerify(emailId: any, otp: any) {
    return this.http.put("validateEmailOtp/" + emailId + "/" + otp, null);
  }
  resetpassword(emailid:any,password:any){
    return this.http.put("passwordReset/"+emailid+","+ password,null);
  }
deleteBookingCustomer(sno:any)
{
  return this.http.delete('deleteBookingCustomer/'+sno);
}
sendTableNumber(mail:any,name:any,tableNumber:any)
{
  return this.http.get('sendTableNumber/'+mail+","+name+","+tableNumber);
}
}