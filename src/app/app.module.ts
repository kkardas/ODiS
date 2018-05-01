import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChartService } from './chart.service';
import { ServersListComponent } from './servers-list/servers-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ConnectionsComponent } from './connections/connections.component';
import {CommonModule} from '@angular/common/';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ServersListComponent,
    ConnectionsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports: [ServersListComponent,
            AppComponent,
            ConnectionsComponent],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
