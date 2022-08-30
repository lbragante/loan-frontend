import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { SimulationLoan } from 'src/app/shared/loan.interface';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  @Input() simulationLoan: any;
  @Output() loanInfo: SimulationLoan;
  @Output() showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.simulationLoan = changes.simulationLoan;
    this.loanInfo = this.simulationLoan.currentValue;
  }

  confirmLoan(): void {
    sessionStorage.setItem('Loan', JSON.stringify(this.simulationLoan.currentValue));
    this.showModal = !this.showModal;
  }

}

