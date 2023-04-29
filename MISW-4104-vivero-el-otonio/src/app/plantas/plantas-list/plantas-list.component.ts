import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent implements OnInit {

  plantas: Array<Planta> = [];
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.plantasInterior = plantas.filter(planta => planta.tipo === "Interior").length;
      this.plantasExterior = plantas.filter(planta => planta.tipo === "Exterior").length;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
