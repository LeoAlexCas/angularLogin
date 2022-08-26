import { Component, OnInit } from '@angular/core';
import { createdItem } from 'src/app/models/createdItem.interface';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  public created: createdItem = {
    itemName: '',
    amount: 0,
    description: '',
    owner: ''
  };

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  };

  createItem() {
    this.inventoryService.createItem(this.created)
      .subscribe({
        next: res => {
          alert('Success!');
          this.router.navigate(['/inventory']);
        },
        error: error => {
          console.error(error);
        }
      });
  };
};
