import {AfterViewInit, Component, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  menuStatus = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  menuClick() {
    this.menuStatus = !this.menuStatus;
  }
}
