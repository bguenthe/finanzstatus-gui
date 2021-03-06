import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UmsaetzeMonthlyComponent } from './umsaetzemonthly/umsaetzemonthly.component';
import { UmsaetzeMonthlyService } from './umsaetzemonthly/umsaetzemonthly.service';

import { VermoegenMonthlyComponent } from './vermoegenmonthly/vermoegenmonthly.component';
import { VermoegenMonthlyService} from './vermoegenmonthly/vermoegenmonthly.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { DataListModule } from 'primeng/datalist';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    AppRoutingModule,
    DataListModule,
    ChartModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
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
