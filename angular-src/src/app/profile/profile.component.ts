import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user ={
    Name :'Adel Ibrahim',
    disability: 'blind',
    email: 'ahmed@gmail.com'
    ,location:'cairo'
    ,itemImageUrl: null
  }
  cities=["cairo","giza","luxur" ]
///////////////////////////////////////////////

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    this.user.location = event.target.value;
  }
// read the image file
  onSelectFile(event: any){ 
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.user.itemImageUrl = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
  }


  
  constructor() {}

  ngOnInit(): void {
  }
}

