import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public debug: string[] = [];

  constructor() {
  }

  log(msg: string, name: string) {
    if (name in this.debug) {
      console.log(msg);
    }
  }
}
