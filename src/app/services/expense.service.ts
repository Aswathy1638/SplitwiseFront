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
}
