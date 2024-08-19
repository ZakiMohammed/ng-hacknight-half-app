import { Component } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantService } from '../../services/participant.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  //participants: Participant[] = [];
  constructor(private participantService: ParticipantService){
    this.participantService.getParticipants().subscribe((participants) => {
        this.participantService.participants = participants;
    });
  }
 
  get participants() {
    return this.participantService.participants;
  }
 
  set participants(value: Participant[]) {
    this.participantService.participants = value;
  }
}