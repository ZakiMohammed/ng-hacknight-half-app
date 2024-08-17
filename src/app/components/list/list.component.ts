import { Component } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  participants: Participant[] = [];
}
