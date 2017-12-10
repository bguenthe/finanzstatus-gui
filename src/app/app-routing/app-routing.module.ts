import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UmsaetzeMonthlyComponent} from '../umsaetzemonthly/umsaetzemonthly.component';
import {VermoegenMonthlyComponent} from '../vermoegenmonthly/vermoegenmonthly.component';

const routes: Routes = [
  { path: 'umsaetzemonthly', component: UmsaetzeMonthlyComponent },
  { path: 'a', component: UmsaetzeMonthlyComponent },
  { path: 'vermoegenmonthly', component: VermoegenMonthlyComponent }
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
