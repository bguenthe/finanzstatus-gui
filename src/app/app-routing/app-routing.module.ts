import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {UmsaetzeMonthlyComponent} from '../umsaetze-monthly/umsaetze-monthly.component';

const routes: Routes = [
  { path: 'umsaetzemonthly', component: UmsaetzeMonthlyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
