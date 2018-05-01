import {Observable} from 'rxjs/Observable';
import {AcctServer, DayRecord, ServerBytes, YtRecord} from './dataTypes';
import {of} from 'rxjs/observable/of';
import {BytesList, DaysData, HoursData, MinutesData, ServersList, YtList} from './dataMocks';

export class ChartServiceMock {
  getDaysData(IP: string): Observable<Array<DayRecord>> {
    return of(DaysData);
  }

  getHoursData(timestamp: string): Observable<Array<DayRecord>> {
    return of(HoursData);
  }

  getMinutesData(timestamp: string): Observable<Array<DayRecord>> {
    return of(MinutesData);
  }

  getServersList(): Observable<Array<AcctServer>> {
    return of(ServersList);
  }

  getYtTime(IP: string): Observable<Array<YtRecord>> {
    return of(YtList);
  }

  getBytes(IP: string): Observable<Array<ServerBytes>> {
    return of(BytesList);
  }

  setIp(IP: string) {
  }
}
