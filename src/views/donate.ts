export class Donate {
  amount = '0';
  donations: number[] = [];

  makeDonation() {
    this.donations.push(parseInt(this.amount));
    console.log(this.donations);
  }
}
