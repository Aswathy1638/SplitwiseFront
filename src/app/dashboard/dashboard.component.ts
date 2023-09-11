import { Component } from '@angular/core';
import {ExpenseService} from '../services/expense.service'
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId:any;
  balance:any;
  constructor(private expenseService:ExpenseService){}

  getBalance()
  {
   const userId = localStorage.getItem('userId');
   console.log("userid",userId);
    this.expenseService.getBalance(userId).subscribe(
      (response)=>{
        console.log("balance", response);
        this.balance=response;
      },
      error=>{console.log('Error');}
    );
  }

}
