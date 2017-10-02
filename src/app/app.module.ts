import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UmsaetzeMonthlyComponent } from './umsaetze-monthly/umsaetze-monthly.component';
import { UmsaetzeMonthlyService } from './umsaetze-monthly.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {MdListModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    AppRoutingModule
  ],
  exports: [
    MdListModule
  ],
  declarations: [
    AppComponent,
    UmsaetzeMonthlyComponent
  ],
  bootstrap: [AppComponent],
  providers: [UmsaetzeMonthlyService],
})
export class AppModule { }
