import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  successMessage: string = "";
  loginForm!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[ Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@gmail.com")]],
      password:['',[Validators.required , Validators.pattern("[a-zA-Z@_]{6,}")]],
    })
  }
  login(){
    this.success = true;
    this.successMessage = "Logined Successfully"
    console.log(this.loginForm)
  }

}