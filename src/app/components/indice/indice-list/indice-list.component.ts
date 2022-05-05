import { Component, OnInit } from '@angular/core';
import { Indice } from 'src/app/models/indice';
import { OpcionesGrafico } from 'src/app/models/opcionesGrafico';
import { IndiceService } from 'src/app/services/indice.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-indice-list',
  templateUrl: './indice-list.component.html',
  styleUrls: ['./indice-list.component.css'],
})
export class IndiceListComponent implements OnInit {
  constructor(private indiceService: IndiceService) {
    this.fecha = new Date();
    this.indices = [];
    this.indicesGrafico = [];
    this.columnas = ['Nombre', 'Menor', 'Valor', 'Mayor', 'Medio', 'Variación'];
  }
  fecha: Date;
  result: any;
  indices: Indice[];
  columnas: String[];

  indicesGrafico!: any[];
  opcionesGrafico: OpcionesGrafico = {
    view: [700, 400],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    legendPosition: 'below',
    showXAxisLabel: true,
    yAxisLabel: 'Valor',
    showYAxisLabel: true,
    xAxisLabel: 'Indices',
    schemeType: 'linear',
    colorScheme: {
      domain: ['#bdc3c7', '#0083B0'],
    },
  };

  getIndices() {
    this.indiceService.getIndices().subscribe(
      (res) => {
        this.result = res;
        this.indices = this.result.listaResult;
        this.indices.forEach((indice) => {
          let registro = {
            name: indice.Nombre,
            series: [
              { name: 'Menor', value: indice.Menor },
              { name: 'Valor', value: indice.Valor },
              { name: 'Mayor', value: indice.Mayor },
            ],
          };
          this.indicesGrafico.push(registro);
        });
        console.log(this.indicesGrafico);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getIndices();
  }
}
