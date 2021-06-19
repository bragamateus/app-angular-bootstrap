import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAlteracaoComponent } from './produtos-alteracao.component';

describe('ProdutosAlteracaoComponent', () => {
  let component: ProdutosAlteracaoComponent;
  let fixture: ComponentFixture<ProdutosAlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosAlteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
