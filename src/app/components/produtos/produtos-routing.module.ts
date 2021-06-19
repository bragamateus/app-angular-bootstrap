import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { ProdutosNovoComponent } from '../produtos-novo/produtos-novo.component';
import { ProdutosAlteracaoComponent } from '../produtos-alteracao/produtos-alteracao.component';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';


const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'novo', component: ProdutosNovoComponent, canActivate: [AuthGuardGuard] },
  { path: 'editar/:id', component: ProdutosAlteracaoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
