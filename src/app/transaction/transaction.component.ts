import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
   transactionForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private expenseService:ExpenseService,private router:Router){}
  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      GroupId: ['', Validators.required],
      userId:['',Validators.required],
      paidId:['',Validators.required],
      expId:['',Validators.required],
      amount:['',Validators.required]

    });
  }

  addTransaction(){
    const GroupId=this.transactionForm.get('GroupId')?.value;
    const user_id= this.transactionForm.get('paidId')?.value;
    const paidId =localStorage.getItem('userId');
    const expId = this.transactionForm.get('expId')?.value;
    const amount =this.transactionForm.get('amount')?.value;

    this.expenseService.addTransaction(GroupId,user_id,paidId,expId,amount).subscribe(
      (res)=>{
        console.log("success",res);
        alert("Transaction Success");
        this.router.navigate(['/home']);
      },
      (error)=>{
        console.log("fail", error);
      }
      
    );
  }
}
