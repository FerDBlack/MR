import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OccupiedPipe} from "./occupied.pipe";
import {FormTitlePipe} from "./form-title.pipe";



@NgModule({
  declarations: [
    OccupiedPipe,
    FormTitlePipe,

  ],
  exports: [
    OccupiedPipe,
    FormTitlePipe,


  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
