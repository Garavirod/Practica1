import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any [] = [];
  // I get all propieties and methods like GET AND POST petitions
  constructor( private http: HttpClient) { 
    console.log('constructor del home called');
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((response: any) => {
      // En response se gurada la daa de la petición
      this.paises = response;
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
