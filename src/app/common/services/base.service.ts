import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders()
};

@Injectable({ providedIn: 'root' })
export class BaseService {
    constructor(protected http: HttpClient) {

    }
    static materialBuster = new Subject<void>();

    public get<T>(url: string, requestBody?: any): Observable<any> {
        return this.http.get(url, { headers: httpOptions.headers, params: requestBody }).pipe(
            catchError((error) => this.handleError(error))// then handle the error
        );
    }
    public post<T>(
        url: string,
        requestBody: any,
        params = {},
        config: {
            reportProgress?: boolean,
            observe?: 'body',
        } = {}
    ): Observable<any> {
        return this.http.post(url, requestBody, { headers: httpOptions.headers, params: params, ...config }).pipe(
            catchError((error) => this.handleError(error))// then handle the error
        );
    }

    public put<T>(url: string, requestBody: any, params = {}): Observable<any> {
        return this.http.put(url, requestBody, { headers: httpOptions.headers, params: params }).pipe(
            catchError((error) => this.handleError(error))// then handle the error
        );
    }

    public delete<T>(url: string, requestBody?: any): Observable<any> {
        return this.http.delete(url + (requestBody ? '/' + (requestBody?.data?._id ?? '') : ''), { body: requestBody });
    }

    /*
    public delete<T>(url: string, requestBody: any): Observable<<T
  >> {
        return this.http.delete<T>(url + '/' + requestBody.data._id).pipe(
            catchError((error) => this.handleError(error))// then handle the error
        );
    }
    */

    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log('error :' + error);
            console.error(
                'Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    protected extractData(res: Response) {
        const body = res;
        return body || {};
    }
}
