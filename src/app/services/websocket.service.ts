import { Injectable } from '@angular/core';

import SockJS from 'sockjs-client';
import {Observable, Subject} from 'rxjs';
import * as Stomp from 'stompjs';
import {Client} from '@stomp/stompjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient : Client;

  private logDetails:Subject<string> = new Subject<string>();
  public logs:Observable<string> = this.logDetails.asObservable();

  constructor() {

    this.stompClient = new Client({
      webSocketFactory:() => new SockJS("http://localhost:8020/ws"),
      reconnectDelay : 5000,
      onConnect:(frame)=>{
        this.stompClient.subscribe('/topic/tickets',(message:any)=>{
          if (message.body && typeof message.body == "string"){
            this.logDetails.next(message.body)
          }else {
            console.log("Invlid message")
          }

        });
      },
      onStompError:(frame)=>{
        console.log("Error occur",frame)
      }
    });

    this.stompClient.activate()






  }
}








