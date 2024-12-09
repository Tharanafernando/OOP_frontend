import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private ApiURL = "http://localhost:8020/api/runThreads"
  constructor(private http:HttpClient) { }

  createEventService(eventDetails: EventDetails){
    return this.http.post(this.ApiURL,eventDetails);
  }

}

export interface EventDetails{
  maxTickets: number;
  totalTickets: number;
  releaseRate: number;
  customerRate: number;
}


