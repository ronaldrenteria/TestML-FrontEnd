import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { TestService } from '../../services/test.service';
import { Result } from '../../interfaces/result.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  item!: Result;

  constructor(private activatedRoute: ActivatedRoute,
              private testService: TestService) { }

  ngOnInit(): void {

      this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.testService.searchById( id )  ),
          tap( console.log )
        )
        .subscribe( item => this.item = item );
  }

  buscar(termino: string){

  }
}
