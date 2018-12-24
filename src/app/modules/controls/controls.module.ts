import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [MatInputModule, MatButtonModule, MatCheckboxModule, MatTabsModule]
})
export class ControlsModule { }
