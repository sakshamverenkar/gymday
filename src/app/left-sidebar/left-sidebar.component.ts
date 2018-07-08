import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  public data: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getLeftSideBarItems();
  }

  getLeftSideBarItems() {
    this.api.getLeftSideBarItems().subscribe(data => {
      console.log('data', data);
      this.data = data;
    });
  }
}
