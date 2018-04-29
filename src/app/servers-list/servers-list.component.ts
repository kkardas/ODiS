import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent implements OnInit {

  public IP = '';
  public serversList: Map<string, number>;
  public YTDate: Date;
  public selectedServer: string;
  public connections: Map<string, number>;

  constructor(private chartService: ChartService) {
    this.serversList = new Map<string, number>();
    this.connections = new Map<string, number>();
  }

  ngOnInit() {
    this.getServersList();
  }

  public setIP(IP: string) {
    this.IP = IP;
    this.chartService.setIp(IP);
  }

  public getServersList() {
    this.chartService.getServersList()
      .subscribe(servers => {
        servers.map(
          server => {
            this.serversList.set(server.ipSrc, 0);
            this.serversList.set(server.ipDst, 0);
          });
      });
  }

  public getYT(IP: string) {
    let timeToAdd = 0;
    this.chartService.getYtTime(IP)
      .subscribe(records => {
        records.map(
          record => {
            const start = new Date(record.startedWatching);
            if (this.YTDate.toString() === start.getFullYear() + '-' + ('0' + (start.getMonth() + 1)).slice(-2) + '-' + start.getDate()) {
              timeToAdd += Number(record.timeSpent[0]) * 60 * 10 + Number(record.timeSpent[1]) * 60 + Number(record.timeSpent[3]) * 10 + Number(record.timeSpent[4]);
            }
          });
      });
    console.log(timeToAdd.toString());
    this.serversList.set(IP, timeToAdd);
  }

  public getConnections(IP: string) {
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
  }

  public isSelected(server: string) {
    return server === this.IP;
  }

}
