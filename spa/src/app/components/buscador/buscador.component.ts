import { Component, OnInit } from '@angular/core';
// Agarramos el parametro que mandemos por url
import { ActivatedRoute } from '@angular/router';
// Importamos el servicio
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  result: number;
  // Tenemos listo el maráetro
  constructor(private _activatedRoute: ActivatedRoute,
              private heroService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this.heroService.buscarHeroes(params['termino']);
      this.result = this.heroes.length;
      console.log(this.heroes);
    })
  }

}
