import { Component } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantService } from '../../services/participant.service';   


@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent   
 {
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) {}

  ngOnInit() {
    this.participantService.getParticipants().subscribe(participants => {
      this.participants = participants;
    });
  }

  get hasParticipants(): boolean {
    return this.participants.length > 0;
  }
}