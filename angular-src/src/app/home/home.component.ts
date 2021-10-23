import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any
 
  constructor(private auth: AuthservicesService ) { }

  ngOnInit(): void {
    this.auth.getcurrentUser().subscribe(currentUser => {
      this.user = currentUser.data;
    },
    err => {
      console.log(err);
      return false;
    });
    
  }
  
}
