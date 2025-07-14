import { TestBed } from '@angular/core/testing';

import { TareasServicio } from './tareas-servicio';

describe('Tareas', () => {
  let service: TareasServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
