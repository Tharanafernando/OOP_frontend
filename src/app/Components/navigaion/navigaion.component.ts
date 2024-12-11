import { Component,OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navigaion',
  standalone: true,
  imports: [],
  templateUrl: './navigaion.component.html',
  styleUrl: './navigaion.component.css'
})
export class NavigaionComponent implements OnInit{
  constructor() {
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    this.isScrolled = window.scrollY > 80;
  }


  ngOnInit() {
  }



}
