import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Item, ItemResponse } from 'src/app/models/item.interface';
import { Store } from '@ngxs/store';
import { SetItemState } from 'src/app/store/item/item.actions';
import { Router } from '@angular/router';
import { ItemStateModel } from 'src/app/store/item/item.model';
import { ItemState } from 'src/app/store/item/item.state';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public items: ItemResponse = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private _store: Store
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
          window.location.reload();
          return deleted;
        },
        error: error => {
          console.error(error);
        }
      });
  };

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  };

  goToEdit(item: ItemStateModel) {
    console.log('itema a mandar al state')
    console.log(item)
    this._store.dispatch(new SetItemState(item));
    sessionStorage.setItem("editId", item._id || '');
    this.router.navigate(['/edit']);
  };
};
