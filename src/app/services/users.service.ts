import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiurl= 'https://localhost:7134/api/Users';
  constructor(private http:HttpClient) { }

    loginUser(email: string, password: string) :Observable<any>{
        const url = `${this.apiurl}/login`;
        const body = { email:email, password:password };
        return this.http.post<any>(url, body);
}

registerUser(name:string,email:string,password:string) : Observable<any>{
  const url=`${this.apiurl}/register`;
  const body= {name:name,email:email,password:password};
  return this.http.post<any>(url,body);
}
createGroup(name:any,description:any)
{ const token = localStorage.getItem('jwtToken');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
};
  const url=`${this.apiurl}/group`;
  const body={groupName: name , description: description  };
  return   this.http.post(url,body ,httpOptions);
}

getGroups(userId:any)
{
  
  const url = `${this.apiurl}/user/${userId}/groups`;
  return this.http.get(url);
}

}
