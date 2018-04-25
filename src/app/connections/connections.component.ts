import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  public connectionsList: Map<string, number>;

  constructor() {
    this.connectionsList = new Map<string, number>();
  }

  ngOnInit() {
  }

}
