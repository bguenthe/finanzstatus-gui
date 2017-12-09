import { Component } from '@angular/core';

import {UmsaetzeMonthlyComponent} from './umsaetze-monthly/umsaetze-monthly.component';
import {VermoegenMonthlyComponent} from './vermoegen-monthly/vermoegen-monthly.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
