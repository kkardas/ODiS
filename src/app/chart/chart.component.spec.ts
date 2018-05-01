import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {ChartService} from '../chart.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ServersListComponent} from '../servers-list/servers-list.component';
import {ChartServiceMock} from '../chart.service.mock';

describe('ChartComponent', () => {
  let fixture: ComponentFixture<ChartComponent>;
  let sut: ChartComponent;
  let serviceMock: ChartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersListComponent,
                      ChartComponent ],
      imports: [FormsModule,
                ChartsModule],
      providers: [{provide: ChartService, useClass: ChartServiceMock},
                  HttpClient,
                  HttpHandler,
                  ChartComponent]
    })
    .compileComponents();
    sut =  TestBed.get(ChartComponent);
    serviceMock = TestBed.get(ChartService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
