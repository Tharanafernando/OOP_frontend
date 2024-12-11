import { Component,OnInit,OnDestroy  } from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';
import {Subscription} from 'rxjs';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent implements OnInit {
  logs:string[] = []
  private logDescription:Subscription | undefined
  constructor(private websocket:WebsocketService) {}


  ngOnInit() {
    this.websocket.logs.subscribe(message => {
      console.log(message)
      this.logs.push(message)
    })
  }


  // ngOnInit() {
  //   this.logDesctiption = this.websocket.logs.subscribe(message => {
  //     this.logs.push(message)
  //   })
  // }


  ngOnDestroy(){
    if (this.logDescription){
      this.logDescription.unsubscribe()
    }
  }


}
