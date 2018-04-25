import { Injectable } from '@angular/core';
import {BytesList, DaysData, HoursData, MinutesData, ServersList, YtList} from './dataMocks';
import { Observable } from 'rxjs/Observable';
import {DayRecord, AcctServer, YtRecord, ServerBytes} from './dataTypes';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class ChartService {

  private IP: string;
  OdisUrl = 'http://localhost:8080/acct';

  getDaysData(): Observable<Array<DayRecord>> {
    return of(DaysData);
    // return this.http.get<Array<DayRecord>>(`${this.OdisUrl}/getIpTwoWeeksPackets/${this.IP}`)
    //   .pipe(
    //     tap((server: DayRecord[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  getHoursData(timestamp: string): Observable<Array<DayRecord>> {
    return of(HoursData);
    // return this.http.get<Array<DayRecord>>(`${this.OdisUrl}/getIpTwoWeeksPackets/${this.IP}/${timestamp}`)
    //   .pipe(
    //     tap((server: DayRecord[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  getMinutesData(timestamp: string): Observable<Array<DayRecord>> {
    return of(MinutesData);
    // return this.http.get<Array<DayRecord>>(`${this.OdisUrl}/getIpTwoWeeksPackets/${this.IP}/${timestamp}`)
    //   .pipe(
    //     tap((server: DayRecord[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  getServersList(): Observable<Array<AcctServer>> {
    return of(ServersList);
    // return this.http.get<Array<AcctServer>>(`${this.OdisUrl}/getAllAcct`)
    //   .pipe(
    //     tap((server: AcctServer[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  getYtTime(IP: string): Observable<Array<YtRecord>> {
    return of(YtList);
    // return this.http.get<Array<YtRecord>>(`${this.OdisUrl}/getIpYoutubeAcct/$(IP)`)
    //   .pipe(
    //     tap((server: YtRecord[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  getBytes(IP: string): Observable<Array<ServerBytes>> {
    return of(BytesList);
    // return this.http.get<Array<ServerBytes>>(`${this.OdisUrl}/getIpTraffic/$(IP)`)
    //   .pipe(
    //     tap((server: ServerBytes[]) => this.logSuccess(`pobrano listę adresów IP`)),
    //     catchError(this.handleError<Server>(''))
    //   );
  }

  setIp(IP: string) {
    this.IP = IP;
  }

  constructor(private http: HttpClient) {
    this.IP = '';
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private logSuccess(message: string) {
    console.log(message);
  }

}