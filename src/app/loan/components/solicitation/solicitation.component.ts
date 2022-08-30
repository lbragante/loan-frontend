import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from 'src/app/shared/loan.interface';
import { SolicitationService } from './solicitation.service';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.scss']
})
export class SolicitationComponent implements OnInit {

  response: any;

  formGetLoan: FormGroup = this.formBuilder.group({
    'name': ['', Validators.required],
    'amount': ['', [Validators.required, Validators.minLength(1)]],
    'installments': ['', [Validators.required, Validators.minLength(1)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private solicitationService: SolicitationService
  ) { }

  ngOnInit(): void {
  }

  sendSimulationLoan(): void {
    let loan: Loan = {
      ...this.formGetLoan.value
    }
    this.solicitationService.sendSimulationLoan(loan).subscribe(
      (loan) => {
        this.response = loan;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
