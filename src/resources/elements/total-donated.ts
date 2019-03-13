import { inject } from 'aurelia-framework';
import { DonationService } from '../../services/donation-service';
import { bindable } from 'aurelia-framework';
import { TotalUpdate } from '../../services/messages';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(DonationService, EventAggregator)
export class TotalDonated {
  @bindable
  total = 0;

  constructor(private ds: DonationService, private ea: EventAggregator) {
    ea.subscribe(TotalUpdate, msg => {
      this.total = msg.total;
    });
  }
}
