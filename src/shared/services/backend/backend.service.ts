import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BACKEND_SERVER = 'localhost:????';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(httpClient: HttpClient) { }

  static getUser(user: string): string {
    // TODO: contact backend server adn make sql query to get user
    return 'TODO';
  }
}
