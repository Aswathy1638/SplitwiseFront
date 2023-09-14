import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showFriends: boolean=false;
  friends:any;
  i = localStorage.getItem('userInitial');
  constructor(private router : Router,private userService:UsersService) {}

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
logout(){
  this.router.navigate(['/']);
}
}
