import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HomeService} from '../services/home.service'

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.css']
})
export class PlacePageComponent implements OnInit {
  categoryId:any
  placeId:any
  place:any
  reviews:any
  constructor(private home:HomeService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.categoryId=this.route.snapshot.paramMap.get('categoryId');
    this.placeId=this.route.snapshot.paramMap.get('placeId');
    this.home.getPlace(this.categoryId, this.placeId).subscribe((data:any) =>{
      this.place = data.data
    })
    this.home.GetallReviews(this.placeId).subscribe((data:any)=>{
      this.reviews = data.data
    })
  } 

//////////////////////////////////////////image slider////////////////////////
   
  imgCollection: Array<object> = [
      {
        image: 'https://media.istockphoto.com/photos/dinner-picture-id185109733?b=1&k=20&m=185109733&s=170667a&w=0&h=PpPlmIKM3Vdn9cRFAsEV9yigpqPJ_jJ1BXE7iiyyxiA=',
        thumbImage: 'https://media.istockphoto.com/photos/dinner-picture-id185109733?b=1&k=20&m=185109733&s=170667a&w=0&h=PpPlmIKM3Vdn9cRFAsEV9yigpqPJ_jJ1BXE7iiyyxiA=',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'https://media.istockphoto.com/photos/fiesta-mexicana-mexican-fiesta-outdoors-tortilla-chips-beef-with-picture-id1227595910?b=1&k=20&m=1227595910&s=170667a&w=0&h=taEdoekSdssiCUXAam2r9g7LUD_wk4BldHrtmoTRPdo=',
        thumbImage: 'https://media.istockphoto.com/photos/fiesta-mexicana-mexican-fiesta-outdoors-tortilla-chips-beef-with-picture-id1227595910?b=1&k=20&m=1227595910&s=170667a&w=0&h=taEdoekSdssiCUXAam2r9g7LUD_wk4BldHrtmoTRPdo=',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://media.istockphoto.com/photos/weve-got-you-covered-during-lockdown-picture-id1287632111?b=1&k=20&m=1287632111&s=170667a&w=0&h=PvIcxOiA4Ofhy3FN6S4gcJXlU-EfsmkDnBKt3HmZNw8=',
        thumbImage: 'https://media.istockphoto.com/photos/weve-got-you-covered-during-lockdown-picture-id1287632111?b=1&k=20&m=1287632111&s=170667a&w=0&h=PvIcxOiA4Ofhy3FN6S4gcJXlU-EfsmkDnBKt3HmZNw8=',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbImage: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Image 5',
        alt: 'Image 5'
      }, {
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Image 6',
        alt: 'Image 6'
      },{
      image: 'https://media.istockphoto.com/photos/restaurant-kitchen-crew-in-action-picture-id1277763706?b=1&k=20&m=1277763706&s=170667a&w=0&h=oFB9fgBOnyAH-0L4yMWlOj28kDDj6WbPzratZ4spP40=',
      thumbImage: 'https://media.istockphoto.com/photos/restaurant-kitchen-crew-in-action-picture-id1277763706?b=1&k=20&m=1277763706&s=170667a&w=0&h=oFB9fgBOnyAH-0L4yMWlOj28kDDj6WbPzratZ4spP40=',
      title: 'Image 7',
      alt: 'Image 7'
    }
  ];

  
  
//////////////////////////////////////////end image slider////////////////////////

  


  addReview(event: any) {
    
  }
 
  status: boolean = false;
  fav=[""]
  
  // heartClick(event: any){
  //   if(this.status === false)
  //   { 
  //     this.status = !this.status; 
  //     this.fav.push(this.place.name)
  //   }
  //   else{

  //     this.status =false;
  //   }
  // }
  
}


