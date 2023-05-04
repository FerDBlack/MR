import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OccupiedPipe} from "./OccupiedPipe";



@NgModule({
  declarations: [
    OccupiedPipe,

  ],
  exports: [
    OccupiedPipe,

  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
