import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBasicosComponent } from './dados-basicos.component';

describe('DadosBasicosComponent', () => {
  let component: DadosBasicosComponent;
  let fixture: ComponentFixture<DadosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosBasicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
