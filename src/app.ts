export class App {
  firstName: string;
  lastName: string;
  office: string;
  candidates: any[] = [];

  addCandidate() {
    const candidate = {
      firstName: this.firstName,
      lastName: this.lastName,
      office: this.office
    };
    this.candidates.push(candidate);
    console.log(candidate);
  }
}
