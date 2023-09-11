import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiurl= 'https://localhost:7134/api/Expenses';

  constructor(private http:HttpClient) { }

  getBalance(userId:any)
  {
    const url=`${this.apiurl}/Expense/Balance?userId=${userId}`;
    
    return this.http.get(url);
  }

  getOweAmount(userId:any)
  {
    const url = `${this.apiurl}/Expense/Balance/owe?userId=${userId}`;
    return  this.http.get(url);
  }
  
  getOwedAmount(userId:any)
  {
    const url = `${this.apiurl}/Expense/Balance/owed?userId=${userId}`;
    return  this.http.get(url);
  }
}
