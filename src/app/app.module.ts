import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LoggerService} from '../shared/services/logger/logger.service';
import {HistGetterService} from '../shared/services/hist-getter/hist-getter.service';
import {BackendService} from '../shared/services/backend/backend.service';
import {ChartsModule} from './charts/charts.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [LoggerService, HistGetterService, BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
