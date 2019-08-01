import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  // El Input es una propiead que será recibida desde afuera

  //LA propiedad heore puede venir de afuera, de lo contrario lo inicalizo en el constructor
  @Input() heroe: any ={}; 
  @Input() idx: number;
  // Va a emitir un obj/array/atring etc
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHeroe(){
    // this.router.navigate(['/heroe',this.idx])
    this.heroeSeleccionado.emit(this.idx);
  }

}
