import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  totalAmount=10;
  transactionID="";

  constructor() { }
}
