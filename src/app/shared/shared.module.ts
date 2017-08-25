import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdInputModule,
  MdListModule, MdSlideToggleModule, MdGridListModule, MdDialogModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule
  ],
  exports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule
  ],
  declarations: []
})
export class SharedModule { }
