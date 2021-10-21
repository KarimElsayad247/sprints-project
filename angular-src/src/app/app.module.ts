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
import { NavbarComponent } from './navbar/navbar.component';
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
// import {IvyCarouselModule} from 'angular-responsive-carousel'; IvyCarouselModule

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PlacePageComponent,
    HomeComponent,
    NavbarComponent,
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
  ],
  imports: [
    BrowserModule, FormsModule, appRoutingModule , NgImageSliderModule ,BrowserAnimationsModule,ReactiveFormsModule, NgbModule,
    HttpClientModule,CommonModule,RatingModule, NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   

}
