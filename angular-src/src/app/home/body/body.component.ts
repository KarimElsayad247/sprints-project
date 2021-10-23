import { Component, OnInit } from '@angular/core';
import { HomeService} from '../../services/home.service'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  searchText=""
  arrName=[]
  constructor(private home:HomeService){ }
  ngOnInit(): void {
    this.home.getCategories().subscribe((data:any)=>{
      this.arrName = data.data;
    })
  }
  text:string='';
 
}

