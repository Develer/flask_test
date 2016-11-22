import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent }   from './store.component';
import { ListComponent }      from './list.component';


const routes: Routes = [
  { path: 'store',  component: StoreComponent },
  { path: 'list',     component: ListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
