import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  isVisible=true;
  onClick(){
    this.isVisible=false;
    
  }
  title:string="Prova";
  onInput(event:Event){
    this.title=(<HTMLInputElement>event.target).value ;
  }
}

