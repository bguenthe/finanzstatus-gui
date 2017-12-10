import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UmsaetzeMonthlyComponent } from './umsaetzemonthly/umsaetzemonthly.component';
import { UmsaetzeMonthlyService } from './umsaetzemonthly/umsaetzemonthly.service';

import { VermoegenMonthlyComponent } from './vermoegenmonthly/vermoegenmonthly.component';
import { VermoegenMonthlyService} from './vermoegenmonthly/vermoegenmonthly.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import { DataListModule } from 'primeng/primeng';

import { ChartModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    AppRoutingModule,
    DataListModule,
    ChartModule
  ],
  exports: [
    BrowserAnimationsModule,
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
