import { Injectable } from '@angular/core';
import { Participant } from '../models/participant.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participants: Participant[]= [];
  apiUrl=environment.apiUrl+'participants'

  constructor(private http:HttpClient) { }

  getparticipants(){
    return this.http.get<Participant[]>(this.apiUrl);
  }

  removeParticipant(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
  addParticipant(participant: Participant) {
    return this.http.post(this.apiUrl, participant);
  }
}
