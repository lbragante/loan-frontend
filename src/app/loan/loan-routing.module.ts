import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SolicitationComponent } from './components/solicitation/solicitation.component';


const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'solicitacao' },
  { path: 'solicitacao', component: SolicitationComponent },
  { path: 'confirmacao', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
