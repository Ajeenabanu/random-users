import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyUsers } from 'src/model/MyUsers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string = ("https://dummyjson.com/users")

  //api call for all users
  getAllUsers():Observable<MyUsers>{
   return this.http.get(this.baseUrl);
  }
}
      