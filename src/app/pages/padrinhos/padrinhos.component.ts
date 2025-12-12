import { Component, OnInit } from '@angular/core';
import { PadrinhosService } from 'src/app/service/padrinhos.service';
import { GuardService } from 'src/app/service/guard.service';

@Component({
  selector: 'app-padrinhos',
  templateUrl: './padrinhos.component.html',
  styleUrls: ['./padrinhos.component.css']
})
export class PadrinhosComponent implements OnInit {

    dsPadrinhos: any[] = [];

    dsCores = [
        {nome: 'Nome de Alguma Coisa 01', cor: '#1b8811'},
        {nome: 'Nome de Alguma Coisa 02', cor: '#881111ff'},
        {nome: 'Nome de Alguma Coisa 03', cor: '#118488ff'},
        {nome: 'Nome de Alguma Coisa 04', cor: '#251188ff'},
    ]

    pathImgCarrousel: any[] = [
        '../../../assets/photos-padrinhos/transferir (4).jfif.jpg',
        '../../../assets/photos-padrinhos/Ivory dress with a groom wearing a White Tuxedo jacket___.jfif.jpg',
        '../../../assets/photos-padrinhos/Lucy Struve Photography_ Austin Wedding Photographer.jfif.jpg'
    ];

    pathImgCarrouselMadrinha: any[] = [
        '../../../assets/photos-madrinhas/exemplo-1.jpg',
        '../../../assets/photos-madrinhas/exemplo-2.jpg'
    ];

    user: any = this.guard.getUser();

    constructor(
        private guard: GuardService,
        private rest: PadrinhosService
    ) {}

    ngOnInit(): void {
        this.search();
    }

    search() {
        this.rest.getPadrinhos().subscribe({
            next: data => {
                this.dsPadrinhos = data;
            },
        });
    }
}
