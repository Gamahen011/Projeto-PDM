import { Component } from "@angular/core";

@Component({
  selector: 'app-hello-world',
  templateUrl: 'helloWorld.html',
  styleUrls: ['helloWorld.scss']

})
export class HelloWorldComponent {

nome: string = "Gama"

helloWorld() {
    if (this.nome == "Gama") {
    this.nome = "Paes"}
    else {this.nome = "Gama"}
}
}