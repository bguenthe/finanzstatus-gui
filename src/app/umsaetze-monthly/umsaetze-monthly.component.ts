import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UmsaetzeMonthly } from '../UmsaetzeMonthly';
import { UmsaetzeMonthlyService } from '../umsaetze-monthly.service';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'app-umsaetze-monthly',
  templateUrl: './umsaetze-monthly.component.html',
  styleUrls: ['./umsaetze-monthly.component.css']
})
export class UmsaetzeMonthlyComponent implements OnInit {

  umsaetzeMonthly: UmsaetzeMonthly[];

  constructor(private router: Router, private umsaetzeMonthlyService: UmsaetzeMonthlyService) {

  }

  ngOnInit() {
    this.umsaetzeMonthlyService.getUmsaetzeMonthly().then(UmsaetzeMonthly => this.umsaetzeMonthly = UmsaetzeMonthly);
  }

}
