import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthservicesService} from '../services/authservices.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success:boolean = false;
  successMessage: string = "";
  regForm!:FormGroup
  email:string="";
  password:string="";
  age:number=0;
  location:string="";
  disability:string = "";

  constructor(private fb: FormBuilder ,private router:Router ,private authservice:AuthservicesService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      email:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@[a-zA-Z]+.com")]],
      password:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]{6,}")]],
      age:['',[Validators.required,Validators.min(0),Validators.max(999) ]],
      location:['',[Validators.required]],
      disability:['',[Validators.required]]
    })
  }
  register(){
    this.successMessage = "Registered Successfully";
    this.success=true;
    console.log(this.regForm)
    ///////////////////////////////////////////////////
    const user= {
      email:this.email,
      password:this.password,
      // age:this.age,
      // location:this.location,
      // disability:this.disability

    }
    console.log(user);
    this.authservice.registerUser(user).subscribe(data=>{
       if(data.success)
       {  
        this.router.navigate(['/']);
       }
    })
  }
}