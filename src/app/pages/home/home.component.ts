import { Component } from '@angular/core';

interface user {
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: user[] = [
    {
      nombre: 'Coco',
      apellido: 'Izquierdo',
      edad: 35,
    },
    {
      nombre: 'Paul',
      apellido: 'Hernandez',
      edad: 12,
    },
  ];

  agregarUsuario(nombre: string, apellido: string, edad: number) {}
}
