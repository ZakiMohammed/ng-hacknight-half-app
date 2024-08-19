import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../models/participant.model';
import { v4 as uuid } from 'uuid';
import { LoaderService } from '../../services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  country: string = '';
  github: string = '';

  constructor(
    private participantService: ParticipantService,
    private loaderService: LoaderService,
    private route:Router
  ) {}

  onSubmit(event: Event) {  
    event.preventDefault();

 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const countryPattern = /^[a-zA-Z\s]+$/;
    const githubPattern = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;

    if(!this.fullName||!this.country||!this.email||!this.github)
    {
      alert('please enter all the details');
      return;

    }

   
    if ( !emailPattern.test(this.email)) {
      alert('Please enter a valid email ');
      return;
    }
    if (!countryPattern.test(this.country)) {
      alert('Please enter a valid country name ');
      return;
    }
    if ( !githubPattern.test(this.github)) {
      alert('Please enter a valid GitHub URL.');
      return;
    }

    const newParticipant: Participant = {
      id: uuid(),
      fullName: this.fullName,
      email: this.email,
      country: this.country,
      gitHubLink: this.github
    };

    this.loaderService.show();
    this.participantService.addParticipant(newParticipant).subscribe({
      next: () => this.participantService.participants.push(newParticipant),
      error: (error) => alert(`Error Occurred: ${error.message}`),
      complete: () => {
        this.loaderService.hide();
        alert("Registration successful");
        this.route.navigate(['/participants']);
        this.fullName = '';
        this.email = '';
        this.country = '';
        this.github = '';
      }
    });
  }
}