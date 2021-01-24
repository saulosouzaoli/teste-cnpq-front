import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoFuncionalComponent } from './dado-funcional.component';

describe('DadoFuncionalComponent', () => {
  let component: DadoFuncionalComponent;
  let fixture: ComponentFixture<DadoFuncionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadoFuncionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
