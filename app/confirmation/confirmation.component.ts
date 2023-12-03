import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  transactionId = "";

  constructor(private payment: PaymentService,private router:Router) { }

  ngOnInit() {
    this.transactionId = this.payment.transactionID;
  }

  home(){
      this.router.navigate(['cart']);
  }
}