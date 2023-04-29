import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasListComponent } from './plantas-list.component';
import { PlantaService } from '../planta.service';
import { of } from 'rxjs';
import { Planta } from '../planta';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let mockPlantaService: any;

  beforeEach(async () => {
    mockPlantaService = jasmine.createSpyObj(['getPlantas']);

    await TestBed.configureTestingModule({
      declarations: [ PlantasListComponent ],
      providers: [
        { provide: PlantaService, useValue: mockPlantaService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with 3 rows plus header', () => {
    const mockPlantas: Planta[] = [
      new Planta(1, 'Rosa', 'Rosa spp', 'Interior', 1, 'Cálido', 'Sustrato plantas interior'),
      new Planta(2, 'Tomate', 'Solanum lycopersicum', 'Exterior', 2, 'Templado', 'Sustrato planta exterior'),
      new Planta(3, 'Cactus', 'Cactaceae', 'Interior', 3, 'Frío', 'Sustrato planta interior cactus suculentas'),
    ];

    mockPlantaService.getPlantas.and.returnValue(of(mockPlantas));

    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tr');

    expect(rows.length).toBe(4); // 3 filas más el encabezado

    const headerRow = rows[0].querySelectorAll('th');
    expect(headerRow.length).toBe(4); // 7 columnas

    const dataRows = [...fixture.nativeElement.querySelectorAll('table tbody tr')];
    dataRows.forEach((row: any, index: number) => {
      const cells = row.querySelectorAll('td');
      expect(cells.length).toBe(4); // 4 columnas
      expect(cells[0].textContent).toContain(mockPlantas[index].id);
      expect(cells[1].textContent).toContain(mockPlantas[index].nombre_comun);
      expect(cells[2].textContent).toContain(mockPlantas[index].tipo);
      expect(cells[3].textContent).toContain(mockPlantas[index].clima);

    });
  });
});
