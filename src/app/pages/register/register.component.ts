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

    if (!this.isValidEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!this.isValidUrl(this.github)) {
      alert('Please enter a valid GitHub URL.');
      return;
    }

    if (!this.isValidName(this.fullName) || !this.isValidCountry(this.country)) {
      alert('Name and Country should only contain alphabetic characters and spaces.');
      return;
    }

    if (!this.fullName || !this.email || !this.country || !this.github) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log(event);

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
        this.fullName = '';
        this.email = '';
        this.country = '';
        this.github = '';
      },
    });

    

  
         

    this.resetForm();
  }

  resetForm() {
    this.fullName = '';
    this.email = '';
    this.country = '';
    this.github = '';
  }

  private isValidEmail(email: string): boolean {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidUrl(url: string): boolean {
    // Simple regex for URL validation
    const urlRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+$/;
    return urlRegex.test(url);
  }

  private isValidName(name: string): boolean {
    // Simple regex for name validation (letters and spaces only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  private isValidCountry(country: string): boolean {
    // Simple regex for country validation (letters and spaces only)
    const countryRegex = /^[a-zA-Z\s]+$/;
    return countryRegex.test(country);
  }
}
