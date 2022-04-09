import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PastryListComponent } from './pastry-list/pastry-list.component';
import { PastryListDetailComponent } from './pastry-list-detail/pastry-list-detail.component';

@NgModule({
  declarations: [
    PastryListComponent,
    AppComponent,
    PastryListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
