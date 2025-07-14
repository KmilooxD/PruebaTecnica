import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTareas } from './agregar-tareas-componentes';

describe('AgregarTareas', () => {
  let component: AgregarTareas;
  let fixture: ComponentFixture<AgregarTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTareas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTareas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
