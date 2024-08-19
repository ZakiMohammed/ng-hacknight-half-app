import { Injectable } from '@angular/core';
import { Participant } from '../models/participant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  participants: Participant[] = [];
  apiUrl = 'http://localhost:3000/participants';

  constructor(private http: HttpClient) { }

  getParticipants(){
    return this.http.get<Participant[]>(this.apiUrl);
  }

  addParticipants(participant: Participant) {
    return this.http.post<Participant>(this.apiUrl, participant);
  }
}
