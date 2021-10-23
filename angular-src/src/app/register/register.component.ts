import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import {AuthservicesService} from '../services/authservices.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router'
import { timeout } from 'rxjs-compat/operator/timeout';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success:boolean = false;
  successMessage: string = "";
  regForm!:FormGroup
  name:String = ""
  password: String =""
  email: String = ""
  birthday: String = ""
  phone:String=""
  address:String="" 
  id: string=""
  gender: any 
  constructor(private fb: FormBuilder ,private _flashMessagesService:FlashMessagesService  , private router:Router ,private auth :AuthservicesService ) { 
    this.regForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)        
      ]),
      birthday: new FormControl('', [Validators.required]),
      phone: new FormControl('', []),
      address: new FormControl('', [Validators.required]),
      disability: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required , Validators.nullValidator])
    })
  }
  data :any[] = []
  ngOnInit(): void {
    this.auth.getAllDisabilities().subscribe((data:any)=>{
      this.data = data['data']
    })
  }
  register(){
    this.id = this.data.filter(disability =>
      disability.name == this.id
    )[0]['_id']
    console.log(this.id)
    const user={
      name: this.name,
      email:this.email,
      password:this.password,
      birthday:this.birthday,
      phone:this.phone,
      address:this.address,
      disability:this.id,
      gender:this.gender,
    }
    console.log(user)
    this.auth.registerUser(user).subscribe((data: any)=>{
      if(data.success)
      {
        this._flashMessagesService.show('Success!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
      }
      else
      {
        this.success=true;
        this.successMessage = "Invalid Data";
      }
    })
  }
 
}