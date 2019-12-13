/* This file contains reusable functions that generate angular
* animations given some trigger information
* */

import {
  animate,
  animateChild,
  AnimationTransitionMetadata,
  group,
  query,
  style,
  transition} from '@angular/animations';

export function slideAnimation(
  from: string,
  to: string): AnimationTransitionMetadata {
  return transition(`${from} => ${to}`, [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflowX: 'hidden'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('750ms ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('750ms ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]);
}
