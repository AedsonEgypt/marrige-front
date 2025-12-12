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
        // Linha 1
        { nome: 'Azul Royal', cor: '#4169E1', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Azul Serenity', cor: '#B3CEE5', fonte: '#000000', selecionado: true,  nm_padrinho: 'Padrinho 1' },
        { nome: 'Azul Turquesa Claro', cor: '#40E0D0', fonte: '#000000', selecionado: false },
        { nome: 'Azul Candy', cor: '#A7D8FF', fonte: '#000000', selecionado: true,  nm_padrinho: 'Padrinho 2' },
        { nome: 'Azul Ice', cor: '#E3F2FD', fonte: '#000000', selecionado: false },
        { nome: 'Verde Água Azulado', cor: '#00B8A9', fonte: '#FFFFFF', selecionado: true, nm_padrinho: 'Padrinho 3' },

        // Linha 2
        { nome: 'Verde Tiffany', cor: '#0ABAB5', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Verde Água', cor: '#7FFFD4', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 4' },
        { nome: 'Verde Esmeralda Claro', cor: '#50C878', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Verde Pistache', cor: '#93C572', fonte: '#000000', selecionado: false },
        { nome: 'Verde Maçã', cor: '#8DB600', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 5' },
        { nome: 'Verde Lima', cor: '#C7EA46', fonte: '#000000', selecionado: false },

        // Linha 3
        { nome: 'Amarelo Limão', cor: '#F7FF00', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 6' },
        { nome: 'Amarelo Canário', cor: '#FFEF00', fonte: '#000000', selecionado: false },
        { nome: 'Amarelo Ouro', cor: '#FFD700', fonte: '#000000', selecionado: false },
        { nome: 'Amarelo Solar', cor: '#FFDD33', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 7' },
        { nome: 'Laranja Dourado', cor: '#FFA500', fonte: '#000000', selecionado: false },
        { nome: 'Laranja Queimado', cor: '#CC5500', fonte: '#FFFFFF', selecionado: true, nm_padrinho: 'Padrinho 8' },

        // Linha 4
        { nome: 'Laranja Vivo', cor: '#FF7A00', fonte: '#000000', selecionado: false },
        { nome: 'Coral', cor: '#FF6F61', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 9' },
        { nome: 'Vermelho Clássico', cor: '#D32F2F', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Vermelho Carmim', cor: '#A40000', fonte: '#FFFFFF', selecionado: true, nm_padrinho: 'Padrinho 10' },
        { nome: 'Pink Chic', cor: '#FF69B4', fonte: '#000000', selecionado: false },
        { nome: 'Pink Intenso', cor: '#FF1493', fonte: '#FFFFFF', selecionado: true, nm_padrinho: 'Padrinho 11' },

        // Linha 5
        { nome: 'Rosa Fúcsia', cor: '#FF00AA', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Rosa Pastel', cor: '#F7C4E0', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 12' },
        { nome: 'Rosa Neon', cor: '#FF2D95', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Rosa Orquídea', cor: '#DA70D6', fonte: '#000000', selecionado: true, nm_padrinho: 'Padrinho 13' },
        { nome: 'Roxo Violeta', cor: '#8A2BE2', fonte: '#FFFFFF', selecionado: false },
        { nome: 'Roxo Ameixa', cor: '#8E4585', fonte: '#FFFFFF', selecionado: true, nm_padrinho: 'Padrinho 14' },
    ];


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
