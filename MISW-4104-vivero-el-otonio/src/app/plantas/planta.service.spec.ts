import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlantaService } from './planta.service';
import { Planta } from './planta';

describe('PlantaService', () => {
  let service: PlantaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService],
    });

    service = TestBed.inject(PlantaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPlantas', () => {
    it('should return an Observable<Planta[]>', () => {
      const dummyPlantas: Planta[] = [
        new Planta(1, 'Planta 1', 'Científico 1', 'Interior', 1, 'Cálido', 'Sustrato 1'),
        new Planta(2, 'Planta 2', 'Científico 2', 'Exterior', 2, 'Templado', 'Sustrato 2'),
        new Planta(3, 'Planta 3', 'Científico 3', 'Interior', 3, 'Frío', 'Sustrato 3'),

      ];

      service.getPlantas().subscribe((Plantas) => {
        expect(Plantas.length).toBe(3);
        expect(Plantas).toEqual(dummyPlantas);
      });



      const req = httpMock.expectOne('https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json');
      expect(req.request.method).toBe('GET');
      req.flush(dummyPlantas);
    });
  });
});

