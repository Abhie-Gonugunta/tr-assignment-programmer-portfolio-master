import { ShareServiceService } from './../../../services/share-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {


  @Input('details') details:any;
  constructor(private shareService:ShareServiceService) { }

  ngOnInit(): void {
    
  }

}
