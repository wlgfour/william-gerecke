import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {LoggerService} from './shared/services/logger/logger.service';
import {HistGetterService} from './shared/services/hist-getter/hist-getter.service';
import {BackendService} from './shared/services/backend/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggerService, HistGetterService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
