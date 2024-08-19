// import { Component } from '@angular/core';
// import { ParticipantService } from '../../services/participant.service';
// import { v4 as uuid } from 'uuid';
// import { LoaderService } from '../../services/loader.service';
// import { Participant } from '../../models/participant.model';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent {
//   fullName: string = '';
//   email: string = '';
//   country: string = '';
//   gitHubLink: string = '';
  

//   constructor(
//     private participantService: ParticipantService,
//     private loaderService: LoaderService
//   ) {}

//   onSubmit(event: Event) {
//     event.preventDefault();
//     if (!this.fullName || !this.email || !this.gitHubLink|| !this.country ) {
//       alert('Please fill the form');
//       return;
//     }

//     const newParticipant: Participant = {
//       id: uuid(),
//       fullName: this.fullName,
//       email: this.email,
//       country: this.country,
//       gitHubLink: this.gitHubLink,
      
      
//     };

//     this.loaderService.show();
//     this.participantService.addParticipants(newParticipant).subscribe({
//       next: () => this.participantService.participants.push(newParticipant),
//       error: (error) => alert(`Error Occured: ${error.message}`),
//       complete: () => {
//         this.loaderService.hide();
//         this.fullName = '';
//         this.email = '';
//         this.country = '';
//         this.gitHubLink = '';
        

//       },
//     });
//   }
  
// }

import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../models/participant.model';
import { v4 as uuid } from 'uuid';
import { LoaderService } from '../../services/loader.service';

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
    private loaderService: LoaderService
  ) {}

  onSubmit(event: Event) {  
    event.preventDefault();

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const countryPattern = /^[a-zA-Z\s]+$/;
    const githubPattern = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;

    if (!this.fullName || !namePattern.test(this.fullName)) {
      alert('Please enter a valid full name (letters and spaces only).');
      return;
    }
    if (!this.email || !emailPattern.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!this.country || !countryPattern.test(this.country)) {
      alert('Please enter a valid country name (letters and spaces only).');
      return;
    }
    if (!this.github || !githubPattern.test(this.github)) {
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
    this.participantService.addParticipants(newParticipant).subscribe({
      next: () => this.participantService.participants.push(newParticipant),
      error: (error) => alert(`Error Occurred: ${error.message}`),
      complete: () => {
        this.loaderService.hide();
        alert("Registration successful");
        this.fullName = '';
        this.email = '';
        this.country = '';
        this.github = '';
      },
    });
  }
}

