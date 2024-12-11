import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickandmortyModule } from './rickandmorty/rickandmorty.module';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';

const routes: Routes = [
  {
    path: "ram",
    loadChildren: () => import ('./rickandmorty/rickandmorty.module').then(m=>RickandmortyModule)
  },
  {
    path: "about",
    component: AboutPagesComponent
  },
  {
    path: "**",
    redirectTo: "ram/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
