import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})

export class AddPlaceComponent implements OnInit {

    added:boolean = false;
    addedMessage: string = "";
    addPlaceForm!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addPlaceForm = this.fb.group({
      Name:['',[Validators.required]],
      Location:['',[Validators.required]],
      Description:['',[Validators.required]],
      Review:['',[Validators.required]],
      Rate:['',[Validators.required]],
    })
  }
  addPlace(){
    this.added = true;
    this.addedMessage = "Added Successfully"
    console.log("Added Successfully")
  }

}