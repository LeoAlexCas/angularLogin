import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Item, ItemResponse } from 'src/app/models/item.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public items: ItemResponse = [];

  constructor(
    private inventoryService: InventoryService
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
};
