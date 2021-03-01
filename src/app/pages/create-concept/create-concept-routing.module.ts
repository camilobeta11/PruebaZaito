import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateConceptPage } from './create-concept.page';

const routes: Routes = [
  {
    path: '',
    component: CreateConceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateConceptPageRoutingModule {}
