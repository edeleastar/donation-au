import { bindable } from 'aurelia-framework';
import { Candidate, Donation } from '../../services/donation-types';

export class DonateForm {
  @bindable
  donations: Donation[] = [];
  @bindable
  paymentMethods: string[];
  @bindable
  candidates: Candidate[];

  amount = '0';
  selectedMethod = '';
  selectedCandidate : Candidate = null;

  makeDonation() {
    const donation = {
      amount: parseInt(this.amount),
      method: this.selectedMethod,
      candidate: this.selectedCandidate
    };
    this.donations.push(donation);
    console.log(this.donations);
  }
}
