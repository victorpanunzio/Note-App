import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

const httpHeaders = {
  headers : new HttpHeaders(
    {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Accept':'application/json'
    })
};
const urlApi ="http://localhost:8080";

@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return ('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  postSignUp(body) : Observable<any> {
    const url = `${urlApi}/SignUp`;
    return this.http.post(url,body,httpHeaders)
      .pipe(
        catchError(this.handleError)
      );
  }
}
