import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchByDistrictsComponent } from './search/search-by-districts/search-by-districts.component';
import { SearchByPinComponent } from './search/search-by-pin/search-by-pin.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'search', component: SearchComponent,
    children:[
      {
        path:"pin",
        component:SearchByPinComponent
      },
      {
        path:"districts",
        component:SearchByDistrictsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
