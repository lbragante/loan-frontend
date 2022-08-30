import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';

@NgModule({
  declarations: [
    SolicitationComponent,
    SimulationComponent,
    ConfirmationComponent,
    ModalConfirmationComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoanModule { }
