import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notify } from '../template/notify';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PadrinhosService {
    private endpoint = environment.apiUrl + '/padrinhos'

    constructor(private http: HttpClient) { }

    getPadrinhos(id?: number): Observable<any> {
        const endpoint = id ? this.endpoint.concat('?id=' + id) : this.endpoint;
        const data: Observable<any> = this.http.get(endpoint).pipe(
            catchError(error => {
                Notify.error(error.message);
                return throwError(() => error);
            })
        );

        return data;
    }

    getCores(): Observable<any> {
        const endpoint = this.endpoint.concat('/cores');
        const data: Observable<any> = this.http.get(endpoint).pipe(
            catchError(error => {
                Notify.error(error.message);
                return throwError(() => error);
            })
        );

        return data;
    }

    selecionarCor(id: number):Observable<any> {
        const endpoint = this.endpoint.concat('/cores/selecionar?id=' + id);
        const data: Observable<any> = this.http.get(endpoint).pipe(
            catchError(error => {
                return throwError(() => error.error.message);
            })
        );

        return data;
    }

    deselecionarCor(id: number):Observable<any> {
        const endpoint = this.endpoint.concat('/cores/deselecionar?id=' + id);
        const data: Observable<any> = this.http.get(endpoint).pipe(
            catchError(error => {
                return throwError(() => error.error.message);
            })
        );

        return data;
    }

}
