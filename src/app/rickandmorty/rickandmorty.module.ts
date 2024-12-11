import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByStatusComponent } from './pages/by-status/by-status.component';

@NgModule({
  declarations: [
    ByNameComponent,
    ByStatusComponent,
  ],
  imports: [
    CommonModule,
    RickandmortyRoutingModule,
    SharedModule,
  ]
})
export class RickandmortyModule { }
