import { Component, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { ParticipantsComponent } from '../../pages/participants/participants.component';
import { ParticipantService } from '../../services/participant.service';
import { LoaderService } from '../../services/loader.service';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  participants: Participant[] = [];
 
  constructor(private participantService:ParticipantService,private loaderService:LoaderService){
 
  };
 
  // get participants()
  // {
  //   return this.participantService.participants;
  // }
  // set participants(value:Participant[])
  // {
  //   this.participantService.participants=value;
  // }
 
  ngOnInit(): void {
    this.loaderService.show();
    this.participantService.getparticipants().subscribe({
      next:(participant)=>this.participants=participant,
      error:(error)=>{alert(` Error occured: ${error.message}`);
        this.loaderService.hide();
      
    },
      complete:()=>{console.log('completed');
        this.loaderService.hide();
      }

    } )
   
  }
 
 
 
}