import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs:Subscription;

  constructor() { 
    // this.retornaObervable().pipe(
    //   retry(1)    
    // ).subscribe( (val)=>{ console.log("val= "+ val) },
    //              (error)=> {console.warn("Error= "+error)},
    //              () => { console.log("Terminado") } 
    // );

    // this.retornaObervable()
    //   .subscribe( console.log );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

  }

  ngOnInit(): void {
  }

  retornaIntervalo():Observable<any>{

    return interval(100)
      .pipe(
        // take(10),
        map( val =>  val + 1 ),
        filter(val => (val%2 === 0)?true:false),  
    );

  }

  retornaObervable():Observable<number>{

    let i = 0;
    return new Observable<number>( (observer)=>{
     
      const intervalo = setInterval(() => {
        i=i+1;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
          // i = 0;
          console.log("i=2 .... error");
          observer.error("i llego a 2");
        }
      }, 1000);
    } );

  }

  ngOnDestroy(){
    this.intervalSubs.unsubscribe();
  }

}
