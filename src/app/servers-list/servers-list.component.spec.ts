import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersListComponent } from './servers-list.component';
import {FormsModule} from '@angular/forms';
import {ChartComponent} from '../chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {ChartService} from '../chart.service';
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {ChartServiceMock} from '../chart.service.mock';
import {OBJECT_TO_SHOW} from '../dataTypes';

describe('ServersListComponent', () => {
  let sut: ServersListComponent;
  let fixture: ComponentFixture<ServersListComponent>;
  let serviceMock: ChartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServersListComponent,
                     ChartComponent],
      imports: [FormsModule,
                ChartsModule],
      providers: [{provide: ChartService, useClass: ChartServiceMock},
                  HttpClient,
                  HttpHandler,
                  ServersListComponent]
    })
    .compileComponents();
    sut =  TestBed.get(ServersListComponent);
    serviceMock = TestBed.get(ChartService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersListComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
  it('should contain proper table head', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const th = bannerElement.querySelectorAll('th');
    expect(th[0].textContent).toEqual('#');
    expect(th[1].textContent).toEqual('IP');
    expect(th[2].textContent).toEqual('');
    expect(th[3].textContent).toEqual('');
    expect(th[4].textContent).toEqual('Ilość czasu na YT');
  });
  it('table row should contain proper buttons', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const td = bannerElement.querySelectorAll('td');
    expect(td[0].textContent).toEqual('1');
    expect(td[1].textContent).toContain('104.16.109.18');
    expect(td[2].textContent).toContain('Pobierz połączenia');
    expect(td[3].textContent).toContain('Pobierz czas YT');
    expect(td[4].textContent).toContain('');
    const button = bannerElement.querySelectorAll('button');
    expect(button[0].textContent).toContain('104.16.109.18');
    expect(button[1].textContent).toContain('Pobierz połączenia');
    expect(button[2].textContent).toContain('Pobierz czas YT');
  });
  it('after clicking Pobierz czas YT the value in table should change', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const buttons = bannerElement.querySelectorAll('button');
    sut.YTDate = new Date('2018-04-20');
    buttons[2].click();
    fixture.detectChanges();

    const bannerElement2: HTMLElement = fixture.nativeElement;
    const tds = bannerElement2.querySelectorAll('td');
    expect(tds[4].textContent).toContain('13:56:46');
  });
  it('after clicking Pobierz czas YT the value in table should not change if in base is no data', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const buttons = bannerElement.querySelectorAll('button');
    sut.YTDate = new Date('2018-04-21');
    buttons[2].click();
    fixture.detectChanges();

    const bannerElement2: HTMLElement = fixture.nativeElement;
    const tds = bannerElement2.querySelectorAll('td');
    expect(tds[4].textContent).toContain('0:0:0');
  });
  it('after clicking "Pobierz połączenia" and IP object to show should be correct', () => {
    expect(sut.objecToBeShown).toEqual(OBJECT_TO_SHOW.NONE);

    const bannerElement: HTMLElement = fixture.nativeElement;
    const buttons = bannerElement.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    expect(sut.objecToBeShown).toEqual(OBJECT_TO_SHOW.CHART);

    buttons[1].click();
    fixture.detectChanges();
    expect(sut.objecToBeShown).toEqual(OBJECT_TO_SHOW.CONNECTIONS);
  });
  it('after clicking "Pobierz połączenia" there should be connections downloaded', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const buttons = bannerElement.querySelectorAll('button');
    buttons[1].click();
    fixture.detectChanges();

    expect(sut.connections.size).toBeGreaterThan(0);
  });
});
