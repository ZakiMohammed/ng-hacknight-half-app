import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../models/participant.model';
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

  constructor(private participantService: ParticipantService,
    private loaderService: LoaderService,
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

    const registrationDetails = {
      id: '', 
      fullName: this.fullName,
      email: this.email,
      country: this.country,
      gitHubLink: this.github
    };

    
    console.log('Registration Details:', registrationDetails);

    
    this.loaderService.show(); // Show the loader

    setTimeout(() => {
      this.participantService.addParticipant(registrationDetails);
      this.resetForm();
      this.loaderService.hide(); // Hide the loader after the delay
    }, 2000); // Adjust the delay as needed
  


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
