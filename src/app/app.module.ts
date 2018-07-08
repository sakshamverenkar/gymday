import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from '../services/api.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    CenterContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
