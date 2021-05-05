import { Component, Input, OnInit } from '@angular/core';
import { ShareServiceService } from 'src/app/services/share-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input('details') details:any;
  constructor(private shareService:ShareServiceService) { }

  ngOnInit(): void {
    
  }
}
