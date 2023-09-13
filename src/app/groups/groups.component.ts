import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  name:any;
  description:any;
  group!: any;
  groupForm!: FormGroup;
  showGroupForm: boolean=false;
  
  constructor(private userService:UsersService,private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      
    });
  }
  
  toggleExpenseForm() {
    this.showGroupForm = true;
    
   }
  getGroups(){
    const userId = localStorage.getItem('userId');
    this.userService.getGroups(userId).subscribe(
      (res)=>{
        this.group=res;
        console.log(res,"groups");
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  onSubmit(){

    const name = this.groupForm.get('Name')?.value;
    const description = this.groupForm.get('Description')?.value;
    
    this.userService.createGroup(name,description)
    .subscribe((res)=>{
      console.log("added",res);
      debugger;
      this.router.navigate(['/home']);
    },
    (error) => {
      
      console.error('error', error);
    }
    
    );
  
   }

}
