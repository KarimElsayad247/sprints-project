import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HomeService} from '../services/home.service'
import { AuthservicesService } from '../services/authservices.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  places:any
  id:any
  constructor(private home:HomeService, private route:ActivatedRoute , private auth:AuthservicesService) { }
  auth1= this.auth.loggedIn();
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.home.getPlaces(this.id).subscribe((data:any) =>{
      this.places = data.data
    })
  }
  arr=[ 
    {id:1,status:false},
    {id:2,status:false},
    {id:3,status:false},
    {id:4,status:false},
  ]
  favourites:any
  status: boolean= false;
    heart(event: any, favouriteId:any){
      this.home.addtofav(favouriteId).subscribe((data:any)=>{
        // this.favourites  = data.data
        for(let i = 0 ; i < this.arr.length ; i++)
        {
          if(this.arr[i].status === false)
          { 
            this.arr[i].status = !this.arr[i].status; 
          }
          else{
            this.arr[i].status = false;
          }
        }
      })
  }
}
