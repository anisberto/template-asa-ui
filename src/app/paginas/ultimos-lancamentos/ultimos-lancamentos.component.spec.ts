import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosLancamentosComponent } from './ultimos-lancamentos.component';

describe('UltimosLancamentosComponent', () => {
  let component: UltimosLancamentosComponent;
  let fixture: ComponentFixture<UltimosLancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosLancamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
