import { ShareServiceService } from './../../services/share-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name: string;
  details: any;
  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    const details = this.shareService.getDetails();
    console.log(details);
    this.name = details.name;
    this.details = details;
  }

}
