import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDeProdutosComponent } from './catalogo-de-produtos.component';

describe('CatalogoDeProdutosComponent', () => {
  let component: CatalogoDeProdutosComponent;
  let fixture: ComponentFixture<CatalogoDeProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoDeProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
