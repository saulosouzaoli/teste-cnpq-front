import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoBasicoComponent } from './dado-basico.component';

describe('DadoBasicoComponent', () => {
  let component: DadoBasicoComponent;
  let fixture: ComponentFixture<DadoBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadoBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
