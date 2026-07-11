import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    activeIntro: boolean = false;

    title = 'Swelen & Edson';

    ngOnInit() {
        this.activeLoading();
    }

    activeLoading(login: boolean = false) {
        if (window.location.pathname == '/login' && !login) return;
    }
}
