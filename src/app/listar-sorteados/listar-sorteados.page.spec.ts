import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarSorteadosPage } from './listar-sorteados.page';

describe('ListarSorteadosPage', () => {
  let component: ListarSorteadosPage;
  let fixture: ComponentFixture<ListarSorteadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSorteadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
