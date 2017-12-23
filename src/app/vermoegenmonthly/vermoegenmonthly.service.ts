import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {VermoegenMonthly} from './VermoegenMonthly';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from 'rxjs/operators';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()

export class VermoegenMonthlyService {
  private vermoegenMonthlyUrl = 'http://localhost:8080/vermoegenmonthly/all';

  constructor(private http: HttpClient) {
  }

  getVermoegenMonthly(): Observable<VermoegenMonthly[]> {
    return this.http.get<VermoegenMonthly[]>(this.vermoegenMonthlyUrl)
      .pipe(
        tap(VermoegenMonthly => console.log(`fetched vermoegen`)),
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
