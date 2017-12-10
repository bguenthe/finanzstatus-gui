import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {VermoegenMonthly} from './VermoegenMonthly';
import {VermoegenMonthlyService} from './vermoegenmonthly.service';

@Component({
  selector: 'app-vermoegenmonthly',
  templateUrl: './vermoegenmonthly.component.html',
  styleUrls: ['./vermoegenmonthly.component.css']
})
export class VermoegenMonthlyComponent implements OnInit {

  @ViewChild('vermoegenChart')
  vermoegenChart;

  vermoegenMonthly: VermoegenMonthly[];

  data: any;

  labels = [];
  vermoegen = [];


  constructor(private router: Router, private vermoegenMonthlyService: VermoegenMonthlyService) {
  }

  ngOnInit() {
    this.vermoegenMonthlyService.getVermoegenMonthly().then(vermoegenMonthly => {
      this.vermoegenMonthly = vermoegenMonthly;

      for (const vermoegen of this.vermoegenMonthly) {
        this.labels.push(vermoegen.monat);
        this.vermoegen.push(vermoegen.vermoegen);
      }

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
          }
        ]
      };

      this.data.labels = this.labels;
      this.data.datasets[0].label = 'Vermoegen';
      this.data.datasets[0].data = this.vermoegen;
    });
  }
}
