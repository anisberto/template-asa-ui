import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEmpresaComponent } from './a-empresa.component';

describe('AEmpresaComponent', () => {
  let component: AEmpresaComponent;
  let fixture: ComponentFixture<AEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
