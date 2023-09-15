import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFriends: boolean=false;
  addFriendForm: boolean=false;
  friendForm!: FormGroup;
  friends:any;
  i = localStorage.getItem('userInitial');

  constructor(private router : Router,private userService:UsersService,private formBuider:FormBuilder) {}
  ngOnInit(): void {
    this.friendForm = this.formBuider.group({
      email: ['', Validators.required],
      
    });
  }

  navigateToDash(){
      this.router.navigate(['/dashboard']);
  }

  navigateToExpense(){
    this.router.navigate(['/expense']);
  }
  navigateToGroups(){
    this.router.navigate(['/groups']);
  }

  getFriends(){
    this.userService.getFriendsList().subscribe(
      (res)=>{
        this.showFriends=true;
        this.friends = res;
        console.log("friends list", res);
      }
    );
  }
  toggleForm(){
    this.addFriendForm =true;
    
  }
logout(){
  this.router.navigate(['/']);
}

addaFriend()
{
  const email = this.friendForm.get('email')?.value;
  console.log(email,"ds");
  this.userService.addFriend(email).subscribe(
    (res)=>{
      
      console.log("added", res);
    },
    (error)=>{
      console.log(error);
    }
  );
}
}


