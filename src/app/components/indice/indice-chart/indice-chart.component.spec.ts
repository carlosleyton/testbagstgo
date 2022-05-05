import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceChartComponent } from './indice-chart.component';

describe('IndiceChartComponent', () => {
  let component: IndiceChartComponent;
  let fixture: ComponentFixture<IndiceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
