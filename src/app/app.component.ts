import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideAnimation} from '../shared/helpers/animations';
import {trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      slideAnimation('homePage', 'cvPage'),
      slideAnimation('cvPage', 'homePage'),
    ])
  ]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
