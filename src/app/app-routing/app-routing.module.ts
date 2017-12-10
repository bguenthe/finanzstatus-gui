import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from '../app.component'
import {UmsaetzeMonthlyComponent} from '../umsaetzemonthly/umsaetzemonthly.component';
import {VermoegenMonthlyComponent} from '../vermoegenmonthly/vermoegenmonthly.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'vermoegenmonthly', component: VermoegenMonthlyComponent },
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
