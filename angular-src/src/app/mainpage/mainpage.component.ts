import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public favs = [{imgUrl:"assets/image/.jpg",rate:2.5,name:"shshhsh"},{imgUrl:"assets/image/bedroom5.jpg",rate:2,name:"shshhsh"}, {imgUrl:"assets/image/bedroom6.jpg",rate:3,name:"shshhsh"}];
 
  addtofav(){
   
  this.favs.push({imgUrl:"t-shirt",rate:5,name:"shshhsh"});
  
   }
   remove(item:any){
  let index= this.favs.indexOf(item); 
  this.favs.splice(index,1);
   }
   counter(i: number) {
    return new Array(i);
  }
}
