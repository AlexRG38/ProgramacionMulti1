import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personas = [
    {
      nombre: 'Pepe',
      apellido: 'Villuela',
      dni: '12345678D'
    },
    {
      nombre: 'Solomeo',
      apellido: 'Paredes',
      dni: '87654321D'
    }
  ];

  elementos = [
    {
      icono: 'alert',
      ruta: '/pagina1',
      titulo: 'Pagina1'
    },
    {
      icono: 'logo-android',
      ruta: '/pagina2',
      titulo: 'Pagina2'
    }
  ];

  constructor() {}

}
