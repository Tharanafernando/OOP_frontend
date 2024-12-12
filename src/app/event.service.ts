import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private ApiURL = "http://localhost:8020/api/runThreads"
  private stopAPI = "http://localhost:8020/api/stopThreads"
  constructor(private http:HttpClient) { }


  stopThreads(): Observable<any> {
    return this.http.post(this.stopAPI, {});
  }


  createEventService(eventDetails: EventDetails){
    return this.http.post(this.ApiURL,eventDetails);
  }

}

export interface EventDetails{
  maxTickets: number;
  totalTickets: number;
  releaseRate: number;
  customerRate: number;
  noOfVendor:number;
  noOfConsumer:number;
}


