import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ControlsModule
  ]
})
export class HomeModule { }
