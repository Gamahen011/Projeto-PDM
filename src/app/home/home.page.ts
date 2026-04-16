import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SorteadorD20Component } from '../sorteadorD20/sorteadorD20';
import { ListarSorteadosPage } from '../listar-sorteados/listar-sorteados.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SorteadorD20Component, IonHeader, IonToolbar, IonTitle, IonContent, ListarSorteadosPage],
})
export class HomePage {
  constructor() {}
}
