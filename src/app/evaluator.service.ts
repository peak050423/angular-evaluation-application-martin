import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  constructor() { }

  concatenate(data: { [k: string]: number }): Observable<string> {
    // Sort object keys alphabetically and concatenate values
    const sortedValues = Object.keys(data).sort().map(key => data[key]);
    const concatenated = sortedValues.join('');
    return of(concatenated).pipe(delay(2000));  // 2 seconds delay
  }

  parity(data: { [k: string]: number }): Observable<boolean> {
    // Sum values and return true if even, false if odd
    const sum = Object.values(data).reduce((acc, val) => acc + val, 0);
    return of(sum % 2 === 0);
  }
}