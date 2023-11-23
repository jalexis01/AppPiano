import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listElements : any[]=[
    {numeroSonido: 1, color:'#0d6efd'},
    {numeroSonido: 2, color:'#6c757d'},
    {numeroSonido: 3, color:'#198754'},
    {numeroSonido: 4, color:'#dc3545'},
    {numeroSonido: 5, color:'#ffc720'},
    {numeroSonido: 6, color:'#25cff2'},
    {numeroSonido: 7, color:'#373b3e'},
  ]

  constructor() {}

  aplicarSonido(numeroSonido: number){
    const audio = new Audio();

    audio.src ='../../assets/sonidos/note'+numeroSonido+'.wav';
    audio.load();
    audio.play();
  }

}
