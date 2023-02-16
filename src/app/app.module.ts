import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { LoadingComponent } from './components/loading/loading.component';
import { loadingReducer } from './store/Loading/loading.reducer';
@NgModule({
  declarations: [AppComponent , LoadingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,StoreModule.forRoot({loading:loadingReducer}) , StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


