import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {

  constructor(private participantService: ParticipantService) {}

  get participant() {
    return this.participantService.participants;
  }
}


