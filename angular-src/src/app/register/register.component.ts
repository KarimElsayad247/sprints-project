import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success:boolean = false;
  successMessage: string = "";
  regForm!:FormGroup
  constructor(private fb: FormBuilder) { 
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
      address: new FormControl('', []),
      disability: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  register(){
    this.successMessage = "Registered Successfully";
    this.success=true;
    console.log(this.regForm)
  }
}
// name: ['',[Validators.required], Validators.pattern("[a-zA-Z@_]")],
// email:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]+@[a-zA-Z]+.com")]],
// password:['',[Validators.required , Validators.pattern("[a-zA-Z0-9@_]{6,}")]],
// birthday:['',[Validators.required]],
// address:['',[Validators.required]],
// disability:['',[Validators.required]],
// phone:['',[Validators.required,Validators.max(119)]]