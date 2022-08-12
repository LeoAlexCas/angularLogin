import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './compoments/signin/signin.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { InventoryComponent } from './compoments/inventory/inventory.component';

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
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
