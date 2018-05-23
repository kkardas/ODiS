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
    this.serversList.set(IP, '');
    this.chartService.getYtTime(IP)
      .subscribe(records => {
        records.map(
          record => {
            const dateStart = new Date(record.startedWatching);
            const expectedStart = new Date(this.YTDate);
            if (dateStart.getFullYear() === expectedStart.getFullYear() &&
                dateStart.getMonth() === expectedStart.getMonth() &&
                dateStart.getDate() === expectedStart.getDate()) {
              this.updateYtTime(Number(record.timeSpent.slice(0, 2)),
                                Number(record.timeSpent.slice(3, 5)),
                                Number(record.timeSpent.slice(6, 8)),
                                IP);
            }
          });
      });
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

  private updateYtTime(hours: number,
                       minutes: number,
                       seconds: number,
                       IP: string) {
    const temp = this.serversList.get(IP);
    if (temp !== '') {
      hours += Number(temp.slice(0, 2));
      minutes += Number(temp.slice(3, 5));
      seconds += Number(temp.slice(6, 8));
    }

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

    let hours2 = '';
    if (hours < 10) {
      hours2 = '0' + hours.toString();
    } else {
      hours2 = hours.toString();
    }


    let minutes2 = '';
    if (minutes < 10) {
      minutes2 = '0' + minutes.toString();
    } else {
      minutes2 = minutes.toString();
    }


    let seconds2 = '';
    if (seconds < 10) {
      seconds2 = '0' + seconds.toString();
    } else {
      seconds2 = seconds.toString();
    }
    this.serversList.set(IP, hours2 + ':' + minutes2 + ':' + seconds2);
  }

}
