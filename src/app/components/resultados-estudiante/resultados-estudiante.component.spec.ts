import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEstudianteComponent } from './resultados-estudiante.component';

describe('ResultadosEstudianteComponent', () => {
  let component: ResultadosEstudianteComponent;
  let fixture: ComponentFixture<ResultadosEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
