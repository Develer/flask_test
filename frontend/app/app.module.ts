import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { WorksampleService } from './worksample.service';
import { StoreComponent } from './store.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    StoreComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    WorksampleService
  ]
})

export class AppModule { }
