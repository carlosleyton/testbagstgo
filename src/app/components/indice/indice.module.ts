import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceListComponent } from './indice-list/indice-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [IndiceListComponent],
  imports: [CommonModule, NgxChartsModule],
})
export class IndiceModule {}
