import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Item, ItemResponse } from 'src/app/models/item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public items: ItemResponse = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.inventoryService.getItems()
      .subscribe({
        next: items => {
          this.items = ( items as ItemResponse );
          console.log(items);
        },
        error: error => {
          console.error(error);
        }
      });
  };

  deleteItem(id: string) {
    this.inventoryService.deleteItem(id)
      .subscribe({
        next: deleted => {
          return deleted;
        },
        error: error => {
          console.error(error);
        }
      });
  };

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

};
