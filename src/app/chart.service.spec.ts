import { TestBed, inject } from '@angular/core/testing';
import { ChartService } from './chart.service';
import {HttpClient, HttpErrorResponse, HttpHandler} from '@angular/common/http';
import {BytesList, DaysData, HoursData, MinutesData, ServersList, YtList} from './dataMocks';
import {asyncError} from '../testing/async-observable-helpers';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

describe('ChartService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let sut: ChartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartService,
                  HttpClient,
                  HttpHandler]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    sut = new ChartService(<any> httpClientSpy);
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));
  it('getters should return value from observable',
    (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(BytesList));
      sut.getBytes('').subscribe(value => {
        expect(value).toBe(BytesList);
        done();
      });
      httpClientSpy.get.and.returnValue(of(DaysData));
      sut.getDaysData('').subscribe(value => {
        expect(value).toBe(DaysData);
        done();
      });
      httpClientSpy.get.and.returnValue(of(HoursData));
      sut.getHoursData('').subscribe(value => {
        expect(value).toBe(HoursData);
        done();
      });
      httpClientSpy.get.and.returnValue(of(MinutesData));
      sut.getMinutesData('').subscribe(value => {
        expect(value).toBe(MinutesData);
        done();
      });
      httpClientSpy.get.and.returnValue(of(ServersList));
      sut.getServersList().subscribe(value => {
        expect(value).toBe(ServersList);
        done();
      });
      httpClientSpy.get.and.returnValue(of(YtList));
      sut.getYtTime('').subscribe(value => {
        expect(value).toBe(YtList);
        done();
      });
    });
  // it('should return an error when the server returns a 404', () => {
  //     const errorResponse = new HttpErrorResponse({
  //       error: 'test 404 error',
  //       status: 404,
  //       statusText: 'Not Found'
  //     });
  //
  //     httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  //     sut.getServersList().subscribe(
  //       servers => fail('expected an error, not servers'),
  //       error  => expect(error.message).toContain('test 404 error')
  //     );
  // });
});
