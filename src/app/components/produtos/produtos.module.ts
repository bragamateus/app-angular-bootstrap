import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosListaComponent } from '../produtos-lista/produtos-lista.component';
import { ProdutosNovoComponent } from '../produtos-novo/produtos-novo.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProdutosAlteracaoComponent } from '../produtos-alteracao/produtos-alteracao.component';
import { SubListaPipe } from '../../pipes/sub-lista.pipe';
import { SimboloPipe } from '../../pipes/simbolo.pipe';
import { DescontoPipe } from '../../pipes/desconto.pipe';
import { CategoriaPipe } from '../../pipes/categoria.pipe';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosListaComponent,
    ProdutosNovoComponent,
    ProdutosAlteracaoComponent,
    SubListaPipe,
    SimboloPipe,
    DescontoPipe,
    CategoriaPipe
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
