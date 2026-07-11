import { Notify } from 'src/app/template/notify';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GuardService {
    private endpoint = environment.apiUrl;
    private isAuthorizedSubject = new BehaviorSubject<boolean>(false);

    isAuthorized$ = this.isAuthorizedSubject.asObservable();
    currentUser: any;
    currentApi: any;

    TEMPO_CACHE_MINUTOS = 30;

    constructor(
        private http: HttpClient
    ) { }

    get isAdmin() {
        this.getUser();
        return this.currentUser && (this.currentUser.role_id == 1);
    }

    setUser(user: any): void {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    setConfirmRead(flg: boolean) {
        let bool = flg ? '1' : '0';
        localStorage.setItem('confirm_read', bool);
    }

    getConfirmRead(): Number {
        return Number(localStorage.getItem('confirm_read')) ?? 0;
    }

    getUser(): any {
        if (!this.currentUser && localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        }
        return this.currentUser;
    }

    clearUser(): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    auth(): Observable<any> {
        return this.http.get(this.endpoint + '/autenticacao').pipe(
            switchMap((user) => {
                this.isAuthorizedSubject.next(true);
                return of(user);
            }),
            catchError(error => {
                this.isAuthorizedSubject.next(false);
                return of(false);
            })
        );
    }

    admin(): Observable<any> {
        try {
            var result: Observable<any> = this.http.get(this.endpoint.concat('/admin'));
        } catch (error) {
            Notify.error('Erro ao tentar buscar dados');
        }

        return result!;
    }

}
