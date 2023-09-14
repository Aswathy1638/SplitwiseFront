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

    addExpense(Description:any,GroupId:any,UserId:any,paiduser_id: any,amount:any,shareAmount:any)
    {
      const url =`${this.apiurl}/Expense`;
      const body={ Description , GroupId, UserId,paiduser_id,amount,shareAmount} ;
   
      return   this.http.post<any>(url,body );
        }

        addTransaction(groupId:any,payerUserId:any,paidUserId:any,expenseId:any,transactionAmount:any)
        {
          const url=`${this.apiurl}/Transaction`;
          const body={groupId,payerUserId,paidUserId,expenseId,transactionAmount};
          return this.http.post<any>(url,body);

        }
}
