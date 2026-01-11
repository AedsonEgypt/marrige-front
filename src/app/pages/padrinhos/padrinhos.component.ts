import { Component, OnInit } from '@angular/core';
import { PadrinhosService } from 'src/app/service/padrinhos.service';
import { GuardService } from 'src/app/service/guard.service';
import { firstValueFrom } from 'rxjs';
import { Notify } from 'src/app/template/notify';

@Component({
  selector: 'app-padrinhos',
  templateUrl: './padrinhos.component.html',
  styleUrls: ['./padrinhos.component.css']
})
export class PadrinhosComponent implements OnInit {

    showPopupCorSelecionada: boolean = false;
    showLoadPanel: boolean = false;
    isAdmin = this.guard.isAdmin;

    corSelecionada!: any;

    dsPadrinhos: any[] = [];

    dsCores: any[] = [];


    pathImgCarrousel: any[] = [
        '../../../assets/photos-padrinhos/exemplo-2.jpeg',
        '../../../assets/photos-padrinhos/Ivory dress with a groom wearing a White Tuxedo jacket___.jfif.jpg'
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

    async search() {
        this.showLoadPanel = true;

        this.dsPadrinhos = await firstValueFrom(this.rest.getPadrinhos());
        this.dsCores = await firstValueFrom(this.rest.getCores());

        this.showLoadPanel = false;
    }

    selecionarCor(cor: any) {
        if (cor.flg_selecionado) return;

        this.corSelecionada = cor;
        this.showPopupCorSelecionada = true;
    }

    closePopupCorSelecionada() {
        this.showPopupCorSelecionada = false;
        this.corSelecionada = null;
    }

    async submitCorSelecionada() {
        if (!this.corSelecionada) return;
        
        this.showLoadPanel = true;
        try {
            await firstValueFrom(this.rest.selecionarCor(this.corSelecionada.id));
            Notify.success('Cor Selecionada com Sucesso');
            this.closePopupCorSelecionada();
            this.showLoadPanel = false;

            this.search();
        } catch (error: any) {
            this.showLoadPanel = false;
            Notify.error(error);
        }

    }

    async deselecionarCor(cor: any) {
        if (!cor.flg_selecionado) return;

        this.showLoadPanel = true;
        try {
            await firstValueFrom(this.rest.deselecionarCor(cor.id));
            Notify.success('Cor desselecionada com sucesso');
            this.showLoadPanel = false;

            this.search();
        } catch (error: any) {
            this.showLoadPanel = false;
            Notify.error(error);
        }
    }
}
