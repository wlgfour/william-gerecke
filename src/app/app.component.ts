import {AfterViewInit, Component, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  menuStatus = true;
  menuAnimation = {
    play: () => null,
    reverse: () => null,
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const ani = anime({
      targets: 'nav li',
      height:  '0',
      padding: '0',
      delay: (el, i) => Math.sqrt(i) * i * 100,
      duration: 500,
      autoplay: false,
      easing: 'easeInOutQuad'
    });
    this.menuAnimation.play = ani.play;
    this.menuAnimation.reverse = ani.reverse;
    this.menuAnimation.reverse();
  }

  menuClick() {
    this.menuStatus = !this.menuStatus;
    this.menuAnimation.reverse();
    this.menuAnimation.play();
  }
}
