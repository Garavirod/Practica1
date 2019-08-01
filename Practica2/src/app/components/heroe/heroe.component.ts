import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: any = {}; //Este es el obj que se va a compartir , el diccioanrio de contexto
  constructor(private activatedRoute: ActivatedRoute,
              private _heroreService: HeroesService) {
    // Estamos alpendiente de los cambis de los parametros
    // Retorna una promesa, algo que está pendiende de los cambios
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroreService.getHeroe(params['id']);
    });
   }

  ngOnInit() {
  }

}
