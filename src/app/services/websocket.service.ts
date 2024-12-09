import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from "sockjs-client";
import * as http from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private client!:Client

  constructor() {
    this.client = new Client()
    // @ts-ignore
    this.client.webSocketFactory = () => new SockJS("http://localhost:8020/websocket")

    this.client.onConnect = () =>{
      console.log("WebSocket connection is successful")
    }

    this.client.onDisconnect = () => {
      console.log("WebSocket connection unsuccessful")
    }

    this.client.onStompError = (error) => {
      console.log("Stomp error: ",error)
    }


    this.client.activate()
  }

  sendMessage(destination:string,body:any):void{
    if (this.client.connected){
      this.client.publish({
        destination:destination,
        body:JSON.stringify(body)
      });
    }else{
      console.log("connection not set")
    }
  }





}
