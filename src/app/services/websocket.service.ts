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
      onConnect:(frame)=>{
        this.stompClient.subscribe('/topic/target',(message:any)=>{
          if (message.body){
            this.logDetails.next(message.body)
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


// this.stompClient = Stomp.over(socket) as any;
// this.stompClient = new Client({
//   webSocketFactory ()  => socket,
//   onConnect : (frames)=>{}
//
// })
// this.stompClient.connect({},(frame:any)=>{
//   console.log(frame);
//   this.stompClient.subscribe('/topic/target',(message:any)=>{
//     if (message.body){
//       this.logDetails.next(message.body);
//     }
//
//
//   });
// })

  // private client!:Client
  //
  // constructor() {
  //   this.client = new Client()
  //   // @ts-ignore
  //   this.client.webSocketFactory = () => new SockJS("http://localhost:8020/websocket")
  //
  //   this.client.onConnect = () =>{
  //     console.log("WebSocket connection is successful")
  //   }
  //
  //   this.client.onDisconnect = () => {
  //     console.log("WebSocket connection unsuccessful")
  //   }
  //
  //   this.client.onStompError = (error) => {
  //     console.log("Stomp error: ",error)
  //   }
  //
  //
  //   this.client.activate()
  // }
  //
  // sendMessage(destination:string,body:any):void{
  //   if (this.client.connected){
  //     this.client.publish({
  //       destination:destination,
  //       body:JSON.stringify(body)
  //     });
  //   }else{
  //     console.log("connection not set")
  //   }
  // }






