import { Component } from '@angular/core';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  name:any;
  description:any;
  group!: any;
  
  constructor(private userService:UsersService){}

  addGroup(){
    this.userService.createGroup(this.name,this.description).subscribe(
      res=>{console.log("group created");},
      (error)=>{
        console.log("error",console.error);
        
      }
    );

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

}
