import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UmsaetzeMonthlyComponent } from './umsaetze-monthly/umsaetze-monthly.component';
import { UmsaetzeMonthlyService } from './umsaetze-monthly.service';

import { VermoegenMonthlyComponent } from './vermoegen-monthly/vermoegen-monthly.component';
import { VermoegenMonthlyService} from './vermoegen-monthly.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdListModule} from '@angular/material';
import {MdTableModule} from '@angular/material';

import { DataListModule } from 'primeng/primeng';

import { ChartModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdListModule,
    MdTableModule,
    AppRoutingModule,
    DataListModule,
    ChartModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdListModule,
    MdTableModule,
    DataListModule,
    ChartModule
  ],
  declarations: [
    AppComponent,
    UmsaetzeMonthlyComponent,
    VermoegenMonthlyComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    UmsaetzeMonthlyService,
    VermoegenMonthlyService
  ],
})
export class AppModule { }
