import { Component } from "@angular/core";

@Component({
  selector: 'app-sorteador',
  templateUrl: 'sorteadorD20.html',
  styleUrls: ['sorteadorD20.scss'],
})


export class SorteadorD20Component {

  resultado: number = 0;

SorteadorD20(min: number, max: number){
  max = Math.ceil(max)
  min = Math.floor(min)
  this.resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  
}

  

}