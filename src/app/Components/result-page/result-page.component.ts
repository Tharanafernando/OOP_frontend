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
  private logDesctiption:Subscription | undefined
  constructor(private websocket:WebsocketService) {

  }


  ngOnInit() {
    this.logDesctiption = this.websocket.logs.subscribe(log => {
      this.logs.push(log)
    })
  }


  ngOnDestroy(){
    if (this.logDesctiption){
      this.logDesctiption.unsubscribe()
    }
  }


}
