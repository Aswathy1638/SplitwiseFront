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
  userForm!: FormGroup;
  showUserForm: boolean = false;
  showGroupForm: boolean=false;
  userAdded: boolean =false;
  users:any;
  showUsers: boolean=false;
  
  
  constructor(private userService:UsersService,private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      
    });
    this.userForm  =   this.formBuilder.group ({
      Name :['',[Validators.required]],
      Email :['',[Validators.email,Validators.required]]
    });
  }
  
  toggleExpenseForm() {
    this.showGroupForm = true;
    
   }
   toggleUserForm() {
    this.showUserForm = true;
    
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
      alert('Group created successfully!');
      this.router.navigate(['/home']);
    },
    (error) => {
      
      console.error('error', error);
    }
    
    );
  
   }

   addUserToGroup(){
    const groupname =this.userForm.get('Name')?.value;
    const email = this.userForm.get('Email')?.value;
    this.userService.addUser(groupname,email).subscribe
    ((res)=>{
      console.log("user added",res);
      this.userAdded=true;
      alert('User added successfully!');
      this.router.navigate(['/home']);

    },
    (error)=>{
      console.log(error,'error');
    });

   }
  
   getMembers(groupid:any){

    this.userService.getUsers(groupid).subscribe(
      (res)=>  {
        this.showUsers=true;
        console.log(res);
        this.users=res;
  
      },
      (error)=>{
        console.log(error,"error");
      }
    );
   }
  
  

}
