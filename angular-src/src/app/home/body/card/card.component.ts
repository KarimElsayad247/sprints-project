import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  startIndex: any = 1 ;
  arrName=[
    'Restaurants',
    'Cinema',
    'Parks',
    'Hospitals',
    'Unversities',
    'Gouverments'
  ]
 
  arr= [
    {id:1,card:"card_1",},
    {id:2,card:"card_2"},
    {id:3,card:"card_3"},
    {id:4,card:"card_4"},
    {id:5,card:"card_5"},
    {id:6,card:"card_6"},
  ]
  flag:boolean = true;
  constructor() { }
  ngOnInit(): void {
    this.Repeat();
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
  Imagedata : any[] = [{ url:'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
                      {url:'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
                      {url:'https://images.unsplash.com/photo-1560053608-13721e0d69e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} ]

}
