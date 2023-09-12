import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../services/expense.service'
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit  {
  expense:any=[];
  showExpenseForm:boolean=false;
  expenseForm!: FormGroup;
 
  
  
  constructor(private expenseService:ExpenseService,private router:Router,private formBuider:FormBuilder){}
  ngOnInit(): void {
    this.expenseForm = this.formBuider.group({
      Description: ['', Validators.required],
      GroupId: ['', Validators.required],
      paiduser_id: ['', Validators.required],
      amount: ['', Validators.required],
      shareAmount: ['', Validators.required]
    });
  }
  
 
  
  getExpenseDetails()
  {
    const userId = localStorage.getItem('userId');
    console.log(userId,"is the current user");
  
    this.expenseService.getExpenseDetails(userId).subscribe(
      (res:any) =>{
        console.log("Expense Details",res);
        this.expense = res;
        
      },
      error=>{console.log(error)}
    );
  }

 toggleExpenseForm() {
  this.showExpenseForm = true;
  
 }
 onSubmit(){

  const description = this.expenseForm.get('Description')?.value;
  const groupId = this.expenseForm.get('GroupId')?.value;
  const paidUserId = this.expenseForm.get('paiduser_id')?.value;
  const amount = this.expenseForm.get('amount')?.value;
  const shareAmount = this.expenseForm.get('shareAmount')?.value;
  const userId = localStorage.getItem('userId');
  debugger;
  this.expenseService.addExpense(description,groupId,userId,paidUserId,amount,shareAmount)
  .subscribe((res)=>{
    console.log("added",res);
    this.router.navigate(['/home']);
  },
  (error) => {
    
    console.error('error', error);
  }
  
  );

 }
  
}
