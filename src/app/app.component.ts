import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {FormComponent} from './Components/form/form.component';
import {ResultPageComponent} from './Components/result-page/result-page.component';
import {NavigaionComponent} from './Components/navigaion/navigaion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent,ResultPageComponent,NavigaionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourseWorkFrontend';
}
