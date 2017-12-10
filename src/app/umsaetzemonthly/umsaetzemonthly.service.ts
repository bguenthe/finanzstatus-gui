import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UmsaetzeMonthly } from './UmsaetzeMonthly';


@Injectable()

export class UmsaetzeMonthlyService {

  constructor(private http: Http) {

  }


  private umsaetzeMonthlyUrl = '/umsaetzemonthly/all';

  getUmsaetzeMonthly(): Promise<UmsaetzeMonthly[]> {
    return this.http.get(this.umsaetzeMonthlyUrl)
      .toPromise()
      .then(response => response.json() as UmsaetzeMonthly[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
