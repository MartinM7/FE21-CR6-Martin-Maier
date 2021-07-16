import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"blog", component: BlogComponent
  },
  {
    path:"travels", component: TravelsComponent
  },
  {
    path:"travel/:id", component: TravelDetailsComponent
  },
  {
    path:"checkout", component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
