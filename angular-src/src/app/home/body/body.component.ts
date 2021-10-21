import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  searchText=""
  constructor(){ }
  ngOnInit(): void {

  }
  arrName=[
    'Restaurants',
    'Cinema',
    'Parks',
    'Hospitals',
    'Unversities',
    'Gouverments'
  ]
  text:string='';
 
}

