import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdInputModule,
  MdListModule, MdSlideToggleModule, MdGridListModule
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
  ],
  declarations: []
})
export class SharedModule { }
