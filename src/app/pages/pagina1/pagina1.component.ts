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
  nombreInput: string = "Bori";
  
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
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  guardar(){

  }
}
