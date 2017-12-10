import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UmsaetzeMonthly} from './UmsaetzeMonthly';
import {UmsaetzeMonthlyService} from './umsaetzemonthly.service';

@Component({
  selector: 'app-umsaetzemonthly',
  templateUrl: './umsaetzemonthly.component.html',
  styleUrls: ['./umsaetzemonthly.component.css']
})
export class UmsaetzeMonthlyComponent implements OnInit {

  @ViewChild('monthlyChart')
  monthlyChart;

  umsaetzeMonthly: UmsaetzeMonthly[];

  data: any;

  labels = [];
  einkuenfte = [];
  kosten = [];

  constructor(private router: Router, private umsaetzeMonthlyService: UmsaetzeMonthlyService) {
  }

  ngOnInit() {
    this.umsaetzeMonthlyService.getUmsaetzeMonthly()
      .subscribe(umsaetzeMonthly => {
        this.umsaetzeMonthly = umsaetzeMonthly;

        for (const umsatz of this.umsaetzeMonthly) {
          this.labels.push(umsatz.monat);
          this.einkuenfte.push(umsatz.einkuenfte);
          this.kosten.push(umsatz.kosten);
        }

        this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: '',
              data: null,
              fill: false,
              borderColor: '#4bc0c0'
            },
            {
              label: '',
              data: null,
              fill: false,
              borderColor: '#565656'
            }
          ]
        };

        this.data.labels = this.labels;
        this.data.datasets[0].label = 'Einkünfte';
        this.data.datasets[0].data = this.einkuenfte;

        this.data.datasets[1].label = 'Kosten';
        this.data.datasets[1].data = this.kosten;
      });
  }
}
