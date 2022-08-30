import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationLoan } from 'src/app/shared/loan.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  contractedLoan: SimulationLoan;

  constructor() { }

  ngOnInit(): void {
    this.getLoanSimulation();
  }

  getLoanSimulation(): SimulationLoan {
    this.contractedLoan = JSON.parse(sessionStorage.getItem('Loan'));
    return this.contractedLoan;
  }

}
