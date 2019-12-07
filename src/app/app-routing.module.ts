import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'chart',
    component: LineChartComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
