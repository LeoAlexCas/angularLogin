import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private items = 'http://localhost:3000/items';

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.http.get(this.items);
  }
}
