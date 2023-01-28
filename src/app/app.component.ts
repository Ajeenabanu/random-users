import { Component, OnInit } from '@angular/core';
import { MyUsers } from 'src/model/MyUsers';
import { ApiService } from './servieses/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularTest';
searchkey:string=''
  users:MyUsers[] = []
  user:any=MyUsers
  randNumber:any
  color:any
  letters:any= '0123456789ABCDEF';

  constructor(private api:ApiService) { }
  ngOnInit():void{
    this.api.getAllUsers().subscribe((data:any)=>{
      console.log(data.users);
      this.users = data.users;
      this.randomUser()
    })
  }
  randomUser(){
    this.randNumber =Math.floor( Math.random() * this.users.length-1);
    this.user = this.users[this.randNumber]
    
      this.color = '#'; 
      for (var i = 0; i < 6; i++) {
          this.color += this.letters[Math.floor(Math.random() * 16)];
     }

     
  }
  searchIn(event:any)
  {
    console.log(event.target.value);
    this.searchkey=event.target.value

  }
}
