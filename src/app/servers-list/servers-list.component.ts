import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ChartService } from '../chart.service';
import {OBJECT_TO_SHOW} from '../dataTypes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent implements OnInit {

  public IP = '';
  public serversList: Map<string, string>;
  public YTDate: Date;
  public selectedServer: string;
  public connections: Map<string, number>;
  public objecToBeShown: OBJECT_TO_SHOW;

  constructor(private chartService: ChartService) {
    this.serversList = new Map<string, string>();
    this.connections = new Map<string, number>();
    this.objecToBeShown = OBJECT_TO_SHOW.NONE;
  }

  ngOnInit() {
  }

  public setIP(IP: string) {
    this.IP = IP;
    this.chartService.setIp(IP);
    this.objecToBeShown = OBJECT_TO_SHOW.CHART;
  }

  public getServersList() {
    this.chartService.getServersList()
      .subscribe(servers => {
        servers.map(
          server => {
            this.serversList.set(server.ipSrc, '');
            this.serversList.set(server.ipDst, '');
          });
      });
  }

  public getYT(IP: string) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    this.chartService.getYtTime(IP)
      .subscribe(records => {
        records.map(
          record => {
            const dateStart = new Date(record.startedWatching);
            const expectedStart = new Date(this.YTDate);
            if (dateStart.getFullYear() === expectedStart.getFullYear() &&
                dateStart.getMonth() === expectedStart.getMonth() &&
                dateStart.getDate() === expectedStart.getDate()) {
              hours += Number(record.timeSpent.slice(0, 2));
              minutes += Number(record.timeSpent.slice(3, 5));
              seconds += Number(record.timeSpent.slice(6, 8));
            }
          });
      });
    this.serversList.set(IP, this.convertToTime(hours, minutes, seconds));
  }

  public getConnections(IP: string) {
    this.IP = IP;
    this.selectedServer = IP;
    this.connections = new Map<string, number>();
    this.chartService.getBytes(IP)
      .subscribe(records => {
        records.map(
          record => {
            let temp = this.connections.get(record.server);
            if (temp == null) {
              temp = 0;
            }
            this.connections.set(record.server, record.bytes + temp);
          });
      });
    this.objecToBeShown = OBJECT_TO_SHOW.CONNECTIONS;
  }

  public isChartSelected(server: string) {
    return server === this.IP && this.objecToBeShown === OBJECT_TO_SHOW.CHART;
  }

  public areConnectionsSelected(server: string) {
    return server === this.IP && this.objecToBeShown === OBJECT_TO_SHOW.CONNECTIONS;
  }

  private convertToTime(hours: number,
                        minutes: number,
                        seconds: number) {


    const hoursFromSeconds = Math.floor(seconds / 3600);
    if (hoursFromSeconds > 0) {
      seconds -= hoursFromSeconds * 3600;
      hours += hoursFromSeconds;
    }

    const minutesFromSeconds = Math.floor(seconds / 60);
    if (minutesFromSeconds > 0) {
      seconds -= minutesFromSeconds * 60;
      minutes += minutesFromSeconds;
    }

    const hoursFromMinutes = Math.floor(minutes / 60);
    if (hoursFromMinutes > 0) {
      minutes -= hoursFromMinutes * 60;
      hours += hoursFromMinutes;
    }

    return hours.toString() + ':' + minutes.toString() + ':' + seconds.toString();
  }

}
