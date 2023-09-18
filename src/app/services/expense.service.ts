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
  getExpenseDetails(userId:any)
  {
    const url = `${this.apiurl}/Expense/${userId}`;
    return this.http.get(url);
    }

    addExpense(Description:any,GroupName:any,UserId:any,PaidUserName: any,amount:any)
    {
      const url =`${this.apiurl}/Expense`;
      const body={ Description , GroupName, UserId,PaidUserName,amount} ;
   
      return   this.http.post<any>(url,body );
        }

      


        addTransaction(GroupName:any,payerName:any,paidUserId:any,expenseId:any,transaction_Amount:any)
        {
          const url=`${this.apiurl}/Transaction`;
          const body={GroupName,payerName,paidUserId,expenseId,transaction_Amount};
          return this.http.post<any>(url,body);

        }
}
