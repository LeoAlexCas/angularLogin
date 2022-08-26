import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/models/item.interface';
import { ItemStateSelectors } from 'src/app/store/item/item.selectors';
import { Store } from '@ngxs/store';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, OnDestroy {
  public edited: Item = {
    _id: '',
    itemName: '',
    amount: 0,
    description: '',
    owner: ''
  };

  constructor(
    private _store: Store,
    private router: Router,
    private inventoryService: InventoryService
  ) { }

  ngOnInit(): void {
    if(this._store.selectSnapshot(ItemStateSelectors.SelectItemState)._id !== '') {
      const item = this._store.selectSnapshot(ItemStateSelectors.SelectItemState);
      this.edited._id = item._id || '';
      this.edited.itemName = item.itemName;
      this.edited.description = item.description;
      this.edited.amount = item.amount;
      this.edited.owner = item.owner || '';
    } else {
      const id = sessionStorage.getItem("editId") || '';
      console.log('el id')
      console.log(id)
      if(id === '') {
        alert('No item found to update');
        this.router.navigate(['/inventory']);
      };
      this.inventoryService.getOneItem(id)
        .subscribe({
          next: item => {
            console.log(item)
            this.edited._id = (item as Item)._id || '';
            this.edited.itemName = (item as Item).itemName;
            this.edited.description = (item as Item).description;
            this.edited.amount = (item as Item).amount;
            this.edited.owner = (item as Item).owner || '';
          },
          error: error => {
            console.error(error);
            alert('No item found to update');
            this.router.navigate(['/inventory']);
          }
        });
    };
  };

  ngOnDestroy() {
    alert('destruye')
    sessionStorage.removeItem("editId");
  }
};
