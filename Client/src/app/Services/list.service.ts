import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { List } from './list.model';
@Injectable({
  providedIn: 'root'
})

export class ListService {
  selectedlist: List;
  lists: List[];
  readonly baseURL = 'http://localhost:3000/lists';

  constructor(private http: HttpClient) { }
}