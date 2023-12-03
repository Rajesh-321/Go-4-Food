import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showtables',
  templateUrl: './showtables.component.html',
  styleUrls: ['./showtables.component.css']
})
export class ShowtablesComponent implements OnInit {
         
  customers:any;
  customerId:any;
  constructor(private service:CustomerService ,private toastr:ToastrService)
  {
   this.customers=[];
  }

  ngOnInit() {
    
    this.service.getCustomerTableDetails().subscribe((empData: any) => {
      this.customers = empData;
      console.log(empData);
      console.log(this.customers);
      
    });

  }
  deleteCustomer(customer: any) {
    const i = this.customers.findIndex((element: any) => {
      return element.sno == customer.sno;
    

    });
    console.log(i);
    this.customerId= this.customers[i].sno;
    this.customers.splice(i, 1);
   this.service.deleteBookingCustomer(this.customerId).subscribe((data: any) => {
    console.log(data);
  });

  }
  


}
