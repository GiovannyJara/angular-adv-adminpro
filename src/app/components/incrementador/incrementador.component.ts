import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Input('val') public progress:number = 78;  //rename
  @Input('val') public progress:number = 40;
  @Input() btnClass:string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

    
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`; 
  }

  cambiarValor( valor:number ){

    if( this.progress >= 100 && valor >= 0 ){
      this.valorSalida.emit(100);
      return this.progress = 100;  
    }

    if( this.progress <=0 && valor <0 ){
      this.valorSalida.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress);
  
  }

  onChange( nuevoValor:number ){
    
    if(nuevoValor>100){
      this.progress = 100
    }else if (nuevoValor<0){
      this.progress = 0
    }else{
      this.progress = nuevoValor;
    }
    this.valorSalida.emit(this.progress);
  }
}
