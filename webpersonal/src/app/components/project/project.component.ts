import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // Este componente madará un obj como parametro a su contenido hijo
  //Este obj 'project' sera la varibale que se comṕarta
  @Input() project: any = {};
  constructor() { }

  ngOnInit() {
  }

}
