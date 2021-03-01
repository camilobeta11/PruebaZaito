import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDescriptionComponent } from './edit-description/edit-description.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    EditDescriptionComponent
  ],
  declarations: [
    EditDescriptionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
