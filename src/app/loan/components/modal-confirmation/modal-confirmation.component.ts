import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationLoan } from 'src/app/shared/loan.interface';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() loanInfo: SimulationLoan;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  hireLoan() {
    this.router.navigate(['/emprestimo/confirmacao']);
  }

  closeModal(): void {
    this.showModal = !this.showModal;
  }

}
