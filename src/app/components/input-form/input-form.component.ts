import { ShareServiceService } from './../../services/share-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  name: string;
  contact: string;
  email: any;
  experience: any;
  qualifications: any;

  constructor(private shareService: ShareServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const details = {
      name:this.name,
      contact: this.contact,
      email:this.email,
      experience: this.experience,
      qualifications: this.qualifications
    }
    this.shareService.setDetails(details);
    this.router.navigate(['about']);
  }

}
