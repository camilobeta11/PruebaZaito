import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateConceptPageRoutingModule } from './create-concept-routing.module';

import { CreateConceptPage } from './create-concept.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateConceptPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateConceptPage]
})
export class CreateConceptPageModule {}
