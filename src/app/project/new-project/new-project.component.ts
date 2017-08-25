import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  /* MD_DIALOG_DATA 用于 打开对话框的时候传入数据 */
  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
    console.log(this.data);
  }

  onSaveClick() {
    this.dialogRef.close({data: 'close'});
  }
}
