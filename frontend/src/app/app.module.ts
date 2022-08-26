import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { SigninComponent } from './compoments/signin/signin.component';
import { InventoryComponent } from './compoments/inventory/inventory.component';
import { CreateItemComponent } from './compoments/create-item/create-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '../app/guards/auth/auth.guard';
import { UserState } from './store/user/user.state';
import { TokenInterceptorService } from './services/tokenInterceptor/token-interceptor.service';
import { EditItemComponent } from './compoments/edit-item/edit-item.component';
import { ItemState } from './store/item/item.state';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    InventoryComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState, ItemState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
