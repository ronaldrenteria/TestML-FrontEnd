import { Component, OnInit } from '@angular/core';
import { Item, Results } from '../../interfaces/result.interface';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino : string = '';
  hayError: boolean = false;
  result  : Item[] = [];
  mostrarResultado: boolean = false;

  get data() {
    return this.result;
  }
  
  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ) {
    
    this.hayError = false;
    this.termino  = termino;
    

    this.testService.searchByQuery( termino )
      .subscribe( (result) => {
        this.mostrarResultado = true;
        this.result = result.items.slice(0, 5);
        
      }, (err) => {
        this.hayError = true;
        this.mostrarResultado = false;
      });

  }

}
