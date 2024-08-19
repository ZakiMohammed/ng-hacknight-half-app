import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  participantCount: number = 0;
  uniqueCountryCount: number = 0;

  constructor(private participantService: ParticipantService) {}

  ngOnInit(): void {
    const participants: Participant[] = this.participantService.getParticipants();
    this.participantCount = participants.length;
    console.log(this.participantCount);
    this.uniqueCountryCount = this.countUniqueCountries(participants);
    console.log(this.uniqueCountryCount);
  }

  private countUniqueCountries(participants: Participant[]): number {
    const countries = new Set(participants.map(p => p.country));
    return countries.size;
  }

}
