import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UmsaetzeMonthly } from './UmsaetzeMonthly';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {VermoegenMonthly} from "../vermoegenmonthly/VermoegenMonthly";
import {Observable} from "rxjs/Observable";


@Injectable()

export class UmsaetzeMonthlyService {
  private umsaetzeMonthlyUrl = 'http://192.168.178.40:8080/umsaetzemonthly/all';

  constructor(private http: HttpClient) {
  }

  getUmsaetzeMonthly(): Observable<UmsaetzeMonthly[]> {
    return this.http.get<UmsaetzeMonthly[]>(this.umsaetzeMonthlyUrl)
      .pipe(
        tap(UmsaetzeMonthly => console.log(`fetched vermoegen`)),
        catchError(this.handleError('getVermoegenMonthly', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
