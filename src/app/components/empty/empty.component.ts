import { Component } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) {}
  ngOnInit() {
    // Retrieve the list of participants when the component initializes
    this.participants = this.participantService.getParticipants();
    console.log(this.participants);
  }
}
