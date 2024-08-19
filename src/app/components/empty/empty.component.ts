import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { LoaderService } from '../../services/loader.service';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
  participants:Participant[]=[];
  constructor(private participantService:ParticipantService,private loaderService:LoaderService){
 
  };
  ngOnInit(): void {
    this.loaderService.show();
    this.participantService.getparticipants().subscribe(
      (participant)=>this.participants=participant
    );
}
}