import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasListComponent } from './plantas-list/plantas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantasListComponent],
  declarations: [PlantasListComponent]
})
export class PlantasModule { }
