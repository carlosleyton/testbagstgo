import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceChartComponent } from './components/indice/indice-chart/indice-chart.component';
import { IndiceListComponent } from './components/indice/indice-list/indice-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/indices', pathMatch: 'full' },
      {
        path: 'indices',
        component: IndiceListComponent,
      },
      {
        path: 'grafico',
        component: IndiceChartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
