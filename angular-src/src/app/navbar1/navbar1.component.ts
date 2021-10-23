import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import {Router}from '@angular/router'

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  constructor(private router:Router , private auth:AuthservicesService) { }

  ngOnInit(): void {
  }
  auth1 = this.auth.loggedIn();
  onLogoutclick(){
    this.auth.logout();
    location.reload();
  }
}
