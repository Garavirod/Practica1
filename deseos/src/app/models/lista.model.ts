import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    title: string;
    creacion: Date;
    terminado: Date;
    completada: boolean;
    items: ListaItem[];

    constructor(title: string){
        this.title = title;
        this.creacion = new Date();
        this.completada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}