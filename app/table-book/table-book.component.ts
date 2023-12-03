import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})
export class TableBookComponent implements OnInit {
  tableStatus: any;
  data: any;
  tableNumbers=0;
  value: any;
  updateTableDetails: any;
  OrderDetails: any;
  dates: any;
  count = 0;
  result:any;
  tableDates:any;
  
  constructor(private service: CustomerService, private http: HttpClientModule,private toastr:ToastrService) {
    this.OrderDetails = {
      "tableNumber": "",
      "name": "",
      "eMail": "",
      "date": "",
      "people": ""
    }
    this.updateTableDetails = {
      "tableNumber": "",
      "tableAllocated": "",
      "date": ""

    }
    /* this.service.tableStaus("true",).subscribe((data: any) => {
       console.log(data);
       this.value=data.length; 
        data.forEach((element:any) => {
            this.tableStatus=element;
            
         });
     }); */

  }
  /* async tableActiveDate()
   {
     await
     
     
   }*/

  async tableActive(orderForm:any) {
    console.log(orderForm);
    console.log(orderForm.OrderDate);
       this.result=orderForm.OrderDate.toString();
       console.log(this.result);
     await this.service.bookingDates(this.result).then((data: any) => {
        console.log(data);
        this.tableDates=data;
        
      });
      console.log(this.tableDates);
    /*if (this.tableDates< 5) {
      await this.service.tableStatus("true").then((data: any) => {
        console.log(data);
        this.value = data.length;
        data.forEach((element: any) => {
          this.tableStatus = element;
 
        });
       

        //console.log(this.tableStatus);
        console.log(this.value);
      });
    }*/
    
      this.tableNumbers=101+this.tableDates.length;
      //this.tableNumbers = this.tableStatus.tableNumber;
      console.log(this.tableNumbers);
      this.updateTableDetails.tableNumber = this.tableNumbers;
      this.updateTableDetails.tableAllocated = false;
      this.updateTableDetails.date=this.result;
      this.service.updateTableStatus(this.updateTableDetails).subscribe((data: any) => {
        console.log(data);
        
      })
      if(true)
      {
       console.log(this.OrderDetails);
      this.OrderDetails.tableNumber = this.tableNumbers;
      this.OrderDetails.name = orderForm.Name;
      this.OrderDetails.eMail = orderForm.eMail;
      this.OrderDetails.date = orderForm.OrderDate;
      this.OrderDetails.people = orderForm.persons
      console.log(this.OrderDetails);
       this.service.tableOrderDetails(this.OrderDetails).subscribe((data: any) => {
        console.log(data);
      });
      this.toastr.success("Table Booked Successfully");
      console.log(this.OrderDetails);
    }
    this.service.sendTableNumber(this.OrderDetails.eMail,this.OrderDetails.name,this.OrderDetails.tableNumber).subscribe((data:any)=>{
          console.log(data);
    });
}
    

  ngOnInit() {

    this.service.getDates().subscribe((empData: any) => {
      this.dates = empData;
      console.log(empData);
      console.log(this.dates);
    });
   
  }


}