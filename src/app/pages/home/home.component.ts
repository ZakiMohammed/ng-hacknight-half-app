import { Component, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // participants: Participant[] = [];
 
  constructor(private participantService:ParticipantService){
 
  };
 
  get participants()
  {
    return this.participantService.participants;
  }
  set participants(value:Participant[])
  {
    this.participantService.participants=value;
  }
 
  ngOnInit(): void {
    this.participantService.getparticipants().subscribe({
      next:(participant)=>this.participants=participant,
      error:(error)=>alert(` Error occured: ${error.message}`),
      complete:()=>console.log('completed')
    } )
    
  }
  getUniqueCountries(): { countries: string[], count: number } {
    const countries = this.participants.map(participant => participant.country);
    const uniqueCountries = [...new Set(countries)];
    return { countries: uniqueCountries, count: uniqueCountries.length };
  }
  
}