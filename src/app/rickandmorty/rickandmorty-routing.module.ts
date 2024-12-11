import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByStatusComponent } from './pages/by-status/by-status.component';

const routes: Routes = [
  {
    path: 'by-name',
    component: ByNameComponent
  },
  {
    path: 'by-status',
    component: ByStatusComponent
  },

  /* {
       path: 'by/:id',
       component: CountryPageComponent
   },*/
  {
    path: '**',
    redirectTo: 'by-name'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RickandmortyRoutingModule { }
