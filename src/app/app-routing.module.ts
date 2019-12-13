import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineChartComponent} from './charts/line-chart/line-chart.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'chart',
    component: LineChartComponent,
    data: { animation: 'chartPage' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'homePage' },
  },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then(m => m.CvModule),
    data: { animation: 'cvPage' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
