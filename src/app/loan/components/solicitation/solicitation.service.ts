import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/shared/loan.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  readonly baseUrl: string = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  sendSimulationLoan(loan: Loan): Observable<Loan> {
    return this.httpClient.post<Loan>(`${this.baseUrl}/loan/create`, loan);
  }
  
}
