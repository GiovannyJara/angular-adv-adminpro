import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    } );
  }

  getUsuarios(){
    
    return new Promise( resolve => {
      
      fetch('https://reqres.in/api/users')
        .then( (resp)=> resp.json() )
        .then( body => resolve( body.data ) );
    } );


  }

}
