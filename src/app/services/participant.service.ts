import { Injectable } from '@angular/core';
import { Participant } from '../models/participant.model';
import { v4 as uuidv4 } from 'uuid'; 

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  private participants: Participant[] = [];

  addParticipant(participant: Participant) {
    participant.id = this.generateUniqueId();
    this.participants.push(participant);
    console.log("Registration Successful");
  }

  getParticipants(): Participant[] {
    return this.participants;
  }

  private generateUniqueId(): string {
    return uuidv4(); 
  }
}
