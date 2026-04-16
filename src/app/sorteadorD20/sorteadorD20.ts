import { Component } from "@angular/core";
import { ListarSorteadosPage } from "../listar-sorteados/listar-sorteados.page";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sorteador',
  templateUrl: 'sorteadorD20.html',
  styleUrls: ['sorteadorD20.scss'],
})


export class SorteadorD20Component {

  lista = new ListarSorteadosPage();
  resultado: number = 0;
  constructor(private router: Router) { }

SorteadorD20(min: number, max: number){
  max = Math.ceil(max)
  min = Math.floor(min)
  this.resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  this.lista.armazenar(this.resultado);
};

irparalistar() {
  this.router.navigate(["/l"])
}
}