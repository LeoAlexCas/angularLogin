import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { createdItem } from 'src/app/models/createdItem.interface';

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
  };

  deleteItem(id: string) {
    return this.http.delete(`${this.items}/${id}`);
  };

  createItem(item: createdItem) {
    return this.http.post(this.items, item);
  }
};
