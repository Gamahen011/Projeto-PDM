import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HelloWorldComponent } from '../helloWorld/helloWorld';
import { SorteadorD20Component } from '../sorteadorD20/sorteadorD20';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SorteadorD20Component, HelloWorldComponent, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
