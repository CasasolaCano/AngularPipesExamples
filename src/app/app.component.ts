import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Capitan América';

  arr = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.357;
  salary:number = 1230.87;

  album = {
    author: 'King Crimson',
    name: 'In the court of the King Crimson',
    year: 1969,
    info: {
      members: 5,
      Genre: 'Progressive Rock'
    }
  }

}
