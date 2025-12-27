import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }

  userRole = new BehaviorSubject<string>("ADMIN");

  getUsers() {
    //This will return the data without modifiying the response from backend
    // return this.http.get("https://jsonplaceholder.typicode.com/users");


    //using map operator and map from Javascript array to return only user id and name to the component
    //tap operator: Gives us the ability to get the original data from the api, in case we have applied any formatting operator on the data.
    //make sure to add the tap operator at the first place of the chaining
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap((originalUserData) => {
        console.log("Original User List:", originalUserData);
      }),
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      }))
    );
  }


  getUserById(id: string) {
    //if we want to only return the address of this user from response then again we will use the map operator
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
      map((userData: any) => userData.address)
    );
  }
}
