import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './compoments/signin/signin.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { InventoryComponent } from './compoments/inventory/inventory.component';
import { CreateItemComponent } from './compoments/create-item/create-item.component';
import { EditItemComponent } from './compoments/edit-item/edit-item.component'; 
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inventory',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'create',
    component: CreateItemComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'edit',
    component: EditItemComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
