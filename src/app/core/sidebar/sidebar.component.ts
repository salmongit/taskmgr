import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today: string;
  constructor() {
    this.today = `day${new Date().getDate()}`;
  }

  ngOnInit() {
  }

}
