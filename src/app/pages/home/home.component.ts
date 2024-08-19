import { Component } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantService } from '../../services/participant.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  participants:Participant[]=[];
  constructor(private participantService:ParticipantService,private loaderService:LoaderService){
 
  };
  ngOnInit(): void {
    this.participantService.getparticipants().subscribe({
      next:(participant)=>this.participants=participant,
      error:(error)=>alert(` Error occured: ${error.message}`),
      complete:()=>console.log('completed')
    } )
    
  }
  getUniqueCountries(): string[] {
    const countries = this.participants.map(participant => participant.country);
    return [...new Set(countries)];
    
  }

}