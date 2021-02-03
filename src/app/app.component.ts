import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name:string = 'Capitan América';
  name2:string = 'cApitaN aMeRicA';

  arr = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.357;
  salary:number = 1230.87;
  date:Date = new Date();

  languague:string = 'fr';
  videoUrl:string = "https://www.youtube.com/embed/-C-HytsGYg0";

  valuePromise = new Promise<string>((resolve) => {

    setTimeout(() => {
      resolve('llego la información');
    }, 4500);
  })


  album = {
    author: 'King Crimson',
    name: 'In the court of the King Crimson',
    year: 1969,
    info: {
      members: 5,
      Genre: 'Progressive Rock'
    }
  }

  changeLanguague(_languague:string) {
    this.languague = _languague;
  }

}
