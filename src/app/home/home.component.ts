import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

interface ILine {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  header = 'William Gerecke';
  innerWidth: number;
  innerHeight: number;
  lines: ILine[] = [];

  constructor() {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.populateLines();
  }

  ngAfterViewInit() {
    this.appendHeader();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.populateLines();
  }

  appendHeader() {
    setTimeout(() => {
      const header = document.getElementById('header');
      if (header.innerHTML.length < this.header.length) {
        header.innerHTML += this.header.charAt(header.innerHTML.length);
        this.appendHeader();
      }
    }, (Math.random() * 150) + 100);
  }

  populateLines() {
    this.lines = new Array(0);
    const dim = Math.min(this.innerHeight, this.innerWidth) / 2.5;
    this.lines.push({
      x1: 0,
      y1: dim,
      x2: dim,
      y2: 0,
    });
    this.lines.push({
      x1: dim,
      y1: this.innerHeight,
      x2: 0,
      y2: this.innerHeight - dim,
    });
    this.lines.push({
      x1: this.innerWidth - dim,
      y1: 0,
      x2: this.innerWidth,
      y2: dim,
    });
    this.lines.push({
      x1: this.innerWidth,
      y1: this.innerHeight - dim,
      x2: this.innerWidth - dim,
      y2: this.innerHeight,
    });

    const tmp: ILine[] = [];
    for (const i of this.lines) {
      tmp.push( {
        x1: (i.x1 / 2) + (this.innerWidth  / 4),
        x2: (i.x2 / 2) + (this.innerWidth  / 4),
        y1: (i.y1 / 2) + (this.innerHeight / 4),
        y2: (i.y2 / 2) + (this.innerHeight / 4),
      });
    }
    for (const i of tmp) {
      this.lines.push(i);
    }
  }

}
