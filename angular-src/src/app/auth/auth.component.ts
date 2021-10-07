import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  flag: boolean = true;
  ngOnInit(): void {
  }
  apply(value:string){
    value === "login"? this.flag = true : this.flag = false 
  }

}