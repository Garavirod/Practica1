import { Component, OnInit } from '@angular/core';
// For using the service and all its tools, let's import them
import { GimeProjectService, Project } from '../../services/gime-project.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
// For using the service in this class
export class PortafolioComponent implements OnInit {
  // Obj type Project
  porjects: Project [] = [];
  constructor(private _gimeData: GimeProjectService) { }

  ngOnInit() {
    // Obtenemos la data que le pedimos al servicio
    this.porjects = this._gimeData.getProjects();
    console.log(this.porjects);
  }

}
