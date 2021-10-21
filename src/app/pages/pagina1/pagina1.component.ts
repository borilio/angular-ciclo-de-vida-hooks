import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  
  //Atributos
  nombreInput: string = "";
  segundos: number = 0;
  timerSuscripcion!: Subscription; //Esta es la suscripción que usaremos para cancelar el interval
  
  //Métodos
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Nunca será llamado, ya que el componente no tiene @Inputs
    //Probamos el OnChanges en el muestra-nombre.component
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSuscripcion.unsubscribe(); //Y así cancelamos la suscripción del interval
    console.log("interval cancelado");
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //Aquí vamos a incrementar los segundos
    this.timerSuscripcion = interval(1000).subscribe(
      (i) => {
        this.segundos = i; 
        /*
        Esto se ejecuta cada segundo. Si ocultamos el componente, se llama 
        a onDestroy y deja de ejecutarse. En principio bien. Pero si volvemos
        a mostrarlo, veremos que se vuelve a ejecutar, pero no cada segundo, si
        no más veces todavía. Hay una fuga de memoria  y lo más eficiente sería
        dejar de estar suscrito al observable liberando así recursos. 
        No solemos quitar la suscripción a los observables que nos emiten un valor 
        y ahí terminan (como un apirest). Pero si deberíamos de 'unsubscribe' a 
        observables que emiten continuamente valores, como este.
        */
      }
    );
  }

  guardar(){

  }
}
