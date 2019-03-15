import { inject } from 'aurelia-framework';
import { DonationService } from '../services/donation-service';

@inject(DonationService)
export class Signup {
  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';

  constructor(private ds: DonationService) {}

  signup(e) {
    console.log(`Trying to sign up ${this.email}`);
    this.ds.signup(this.firstName, this.lastName, this.email, this.password);
  }
}
