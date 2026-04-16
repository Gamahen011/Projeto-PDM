import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SorteadorD20Component } from '../sorteadorD20/sorteadorD20';

@Component({
  selector: 'app-listar-sorteados',
  templateUrl: './listar-sorteados.page.html',
  styleUrls: ['./listar-sorteados.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListarSorteadosPage implements OnInit {

  resultados: number[] = [0]
  i = 0

  armazenar(resultado: number){
  this.resultados[this.i] = resultado
  this.i += 1
  sessionStorage.setItem('lista', JSON.stringify(this.resultados))
}

  listar() {
    return sessionStorage.getItem('lista')
  }
  
  ngOnInit() {
  }

}
