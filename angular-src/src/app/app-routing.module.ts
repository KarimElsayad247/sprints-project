import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthComponent } from './auth/auth.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { FavComponent } from './fav/fav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GuardGuard} from './guards/guard.guard'


const routes: Routes =[
  { path: '' , component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[GuardGuard]},
  { path: 'categories/:categoryId/places/:placeId' , component: PlacePageComponent },
  { path: 'add_place' , component: AddPlaceComponent, canActivate:[GuardGuard] },
  { path: 'auth' , component: AuthComponent},
  { path : 'fav' ,component:FavComponent, canActivate:[GuardGuard]},
  { path : 'categories/:id' ,component:MainpageComponent},
  { path: '**' , component: NotfoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class appRoutingModule { }
