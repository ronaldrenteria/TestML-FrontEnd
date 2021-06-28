import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestResultComponent } from './components/test-result/test-result.component';
import { SearchComponent } from './pages/search/search.component';
import { ItemComponent } from './pages/item/item.component';


@NgModule({
  declarations: [
    TestInputComponent,  
    TestResultComponent,
    
    SearchComponent,
    ItemComponent
  ],
  exports: [
    SearchComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class TestModule { }
