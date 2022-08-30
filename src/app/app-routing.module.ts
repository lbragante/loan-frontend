import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanModule } from './loan/loan.module';


const routes: Routes = [
  { path: 'emprestimo', loadChildren: () => LoanModule },
  { path: '', pathMatch: 'full', redirectTo: 'emprestimo/solicitacao' },
  { path: 'confirmacao', pathMatch: 'full', redirectTo: 'emprestimo/confirmacao' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
