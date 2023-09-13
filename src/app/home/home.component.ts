import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

}
