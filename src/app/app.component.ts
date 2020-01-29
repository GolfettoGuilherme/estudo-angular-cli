import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos :Photo[] = [];
  
  //construtor serve somente para injecao de dependencia
  constructor(private photoService: PhotoService) { }
  
  //esse metodo é chamado pelo ciclo de vida de um componente, que faz com que ele seja
  //executado no momento depois que foi declarado os decorators
  //qualquer inicializacao vai ser feita no ngonInit -> que esta na interface Oninit
  ngOnInit(): void {
                                            //subscribe é quem de fato faz o request
    this.photoService.listFromUser('flavio').subscribe(photos => {
      this.photos = photos
    });
    
  }

}
