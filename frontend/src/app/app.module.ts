import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { SigninComponent } from './compoments/signin/signin.component';
import { InventoryComponent } from './compoments/inventory/inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../app/guards/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
