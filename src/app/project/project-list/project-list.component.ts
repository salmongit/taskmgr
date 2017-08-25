import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "id": "Sk2HaTagb",
      "name": "问题跟踪系统",
      "desc": "用于 Bug 的内部跟踪和管理",
      "coverImg": "/assets/img/covers/1.jpg"
    },
    {
      "name": "某某公司 ERP 系统",
      "desc": "为某某公司开发的定制化 ERP 系统",
      "coverImg": "/assets/img/covers/20.jpg"
    }
    ];
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: 'this. is my message'});
    dialogRef.afterClosed().subscribe(result => console.log(result.data));
  }

}
