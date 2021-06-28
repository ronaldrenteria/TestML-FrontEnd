import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './test/pages/item/item.component';
import { SearchComponent } from './test/pages/search/search.component';


const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        pathMatch: 'full'
    },
    {
        path: 'item/:id',
        component: ItemComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


