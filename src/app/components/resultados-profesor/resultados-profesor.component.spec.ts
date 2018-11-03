import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosProfesorComponent } from './resultados-profesor.component';

describe('ResultadosProfesorComponent', () => {
  let component: ResultadosProfesorComponent;
  let fixture: ComponentFixture<ResultadosProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
