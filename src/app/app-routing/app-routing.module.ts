import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UmsaetzeMonthlyComponent} from '../umsaetze-monthly/umsaetze-monthly.component';
import {VermoegenMonthlyComponent} from '../vermoegen-monthly/vermoegen-monthly.component';

const routes: Routes = [
  { path: 'umsaetze-monthly', component: UmsaetzeMonthlyComponent },
  { path: 'vermoegen-monthly', component: VermoegenMonthlyComponent }
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
