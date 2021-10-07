import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success:boolean = false;
  successMessage: string = "";
  regForm!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      email:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@gmail.com")]],
      password:['',[Validators.required , Validators.pattern("[a-zA-Z@_]{6,}")]],
      age:['',[Validators.required,Validators.min(0),Validators.max(999) ]],
      location:['',[Validators.required]],
      disability:['',[Validators.required]]
    })
  }
  register(){
    this.successMessage = "Registered Successfully";
    this.success=true;
    console.log(this.regForm)
  }
}