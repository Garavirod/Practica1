import { Injectable } from '@angular/core';

@Injectable()
export class GimeProjectService {
  // DATA
  private projects: Project [] = [
    {
      name: 'Bases de datos no relacionales',
      content : 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm....',
      sourceImg : 'assets/img/img_projects/1.jpg',
      link: 'http:lacaffe.pythonanywhere.com'
    },

    {
      name: 'Desarrollo web frontend',
      content : 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm....',
      sourceImg : 'assets/img/img_projects/2.jpg',
      link: 'http:lacaffe.pythonanywhere.com'
    },

    {
      name: 'Desarrollo web backend',
      content : 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm....',
      sourceImg : 'assets/img/img_projects/3.jpg',
      link: 'http:lacaffe.pythonanywhere.com'
    },

    {
      name: 'Data Science con R',
      content : 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm....',
      sourceImg : 'assets/img/img_projects/4.jpg',
      link: 'http:lacaffe.pythonanywhere.com'
    }
  ]
  constructor() { console.log('SERVICE IS READY TO USE IT!');
  }

  getProjects(): Project[] {
    return this.projects;
  }
}

export interface Project {
  name: string;
  content: string;
  sourceImg: string;
  link: string;
}