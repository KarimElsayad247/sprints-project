import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthservicesService } from '../services/authservices.service';
import {Router}from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  successMessage: string = "";
  loginForm!:FormGroup;
  static show: any;
  email: string=""
  password: string = ""
  constructor(private fb: FormBuilder , private auth:AuthservicesService , private router:Router) { }

  ngOnInit(): void {
    this.auth.loggedIn()? this.router.navigate(['/']): false ;
    this.loginForm = this.fb.group({
      email:['',[ Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@gmail.com")]],
      password:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]{6,}")]],
    })
  }
  
  login(){
    const user={
      email: this.email,
      password:this.password
    }
    this.auth.authenticateUser(user).subscribe(data=>{
      if(data.success)
      {
        // this.auth.getcurrentUser().subscribe(currentUser=>{
          this.auth.storeUserData(data.token);
          this.success = true;
          this.successMessage = "Logined Successfully"
          this.router.navigate(['/'])
        // });
      }
      else
      {
        this.success = true;
        this.successMessage = "Invalid Data";
      }
    })
  }

}