import { Component, OnInit, Input } from '@angular/core';
import { Result, Results } from '../../interfaces/result.interface';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styles: [ 
    `
      ul li {
        display: block;
        height: 100px;
        line-height: 100px;
      }
      
      ul li img {
        vertical-align: middle;
      }
    `
  ]
})
export class TestResultComponent implements OnInit {

  @Input('data')  data: any[] = [];

  constructor() { 
    console.log(this.data);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
