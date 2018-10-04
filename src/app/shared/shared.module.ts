import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    LoaderComponent,
    SideNavbarComponent
  ],
  exports: [
    LoaderComponent,
    SideNavbarComponent
  ]
})
export class SharedModule { }
