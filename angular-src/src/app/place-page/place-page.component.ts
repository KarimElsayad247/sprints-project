import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.css']
})
export class PlacePageComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
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

  place={
    name:" Al Asdeqaa"
    , describtion:" our restaurant represent best services"
    ,location: "alharam, Giza"
    ,category:"restaurant"
    ,rate: 3.4
    ,ratesNumber: 10

  }
  comments = ["wow","Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.","Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis."];
   firstName = "Ahmed"
  user ={
    name: this.firstName,
    lastName :' Adel',
    disability: 'blind',
    email: 'ahmed@gmail.com'
    ,location:'cairo'
    ,itemImageUrl: null
  }
//  commentDetails={
//    hour: 
//  };
  rateCalc (event: any) {
    let sumOfTerms = this.place.rate  * this.place.ratesNumber
    this.place.ratesNumber ++
    sumOfTerms += parseInt(event.target.value)
    this.place.rate = sumOfTerms / (this.place.ratesNumber ) 
    console.log(event.target.value)
    console.log(this.place.rate)
  }
  addReview(event: any) {
    if(event.target.previousElementSibling.value){
      console.log(   event.target.previousElementSibling.value )
    this.comments.unshift(event.target.previousElementSibling.value)
    }
    const date = new Date();
  }
 
  status: boolean = false;
  fav=[""]
  
  heartClick(event: any){
    if(this.status === false)
    { 
      this.status = !this.status; 
      this.fav.push(this.place.name)
    }
    else{

      this.status =false;
    }
    
    console.log(this.fav)
  }
  
}


