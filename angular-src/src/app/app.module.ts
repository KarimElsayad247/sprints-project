import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutingModule } from './app-routing.module';
import { PlacePageComponent } from './place-page/place-page.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { CardComponent } from './home/body/card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FavComponent } from './fav/fav.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng-starrating';
import { FilterPipe } from './filter.pipe';
import { Navbar1Component } from './navbar1/navbar1.component';
import {AuthservicesService} from './services/authservices.service';
import { HomeService } from './services/home.service'; 
import {GuardGuard} from './guards/guard.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PlacePageComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    NotfoundComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AddPlaceComponent,
    MainpageComponent,
    FavComponent,
    FilterPipe,
    Navbar1Component,
  ],
  imports: [
    BrowserModule, FormsModule, appRoutingModule , NgImageSliderModule ,BrowserAnimationsModule,ReactiveFormsModule, NgbModule,
    HttpClientModule,CommonModule,RatingModule, NgbModule , FlashMessagesModule.forRoot()
  ],
  providers: [AuthservicesService , HomeService , GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {   

}
