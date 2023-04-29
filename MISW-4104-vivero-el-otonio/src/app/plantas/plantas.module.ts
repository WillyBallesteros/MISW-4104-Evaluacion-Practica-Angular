import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasListComponent } from './plantas-list/plantas-list.component';
import { PlantaService } from './planta.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantasListComponent],
  providers: [PlantaService],
  declarations: [PlantasListComponent]
})
export class PlantasModule { }
