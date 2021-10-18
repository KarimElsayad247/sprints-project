import { AuthservicesService } from './../services/authservices.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  successMessage: string = "";
  loginForm!:FormGroup;
  email:string="";
  password:string = "";
  constructor(private fb: FormBuilder , private authservices:AuthservicesService , private router:Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[ Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@gmail.com")]],
      password:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]{6,}")]],
    })
  }
  login(){
    const user = {
      email:this.email,
      password:this.password
    }
    console.log(user)
    this.success = true;
    this.successMessage = "Logined Successfully"
    console.log(this.loginForm)
    this.authservices.authenticateUser(user).subscribe(data =>{
      if(data.success)
      {
        this.authservices.storeUserData(data.token,data.user);
        this.router.navigate(['/']);
      }
    })  
  }

}