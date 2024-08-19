import { Component, Input, Output} from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) participant!: Participant;

}
