import {Component} from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'A great power requires a great responsability',
        autor: 'Ben parker'
    };
    personajes: string[] = ['Spiderman', 'Venom', 'Dr. OCtopus'];
}