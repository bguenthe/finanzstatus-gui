import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {VermoegenMonthly} from './VermoegenMonthly';
import {Http} from "@angular/http";


@Injectable()

export class VermoegenMonthlyService {

  constructor(private http: Http) {

  }


  private vermoegenMonthlyUrl = '/vermoegenmonthly/all';

  getVermoegenMonthly(): Promise<VermoegenMonthly[]> {
    return this.http.get(this.vermoegenMonthlyUrl)
      .toPromise()
      .then(response => response.json() as VermoegenMonthly[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}