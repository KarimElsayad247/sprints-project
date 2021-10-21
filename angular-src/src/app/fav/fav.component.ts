import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
 public starTotal=5;
 
  constructor() { }
 
  public favs = [{imgUrl:"assets/image/.jpg",rate:2.5,name:"shshhsh"},{imgUrl:"assets/image/.jpg",rate:2,name:"shshhsh"}, {imgUrl:"assets/image/.jpg",rate:3,name:"shshhsh"}];
  ngOnInit(): void {
  
  }
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
