import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr= [
    {id:1,card:"card_1"},
    {id:2,card:"card_2"},
    {id:3,card:"card_3"},
    {id:4,card:"card_4"},
    {id:5,card:"card_5"},
    {id:6,card:"card_6"},
  ]
  flag:boolean = true;
}
