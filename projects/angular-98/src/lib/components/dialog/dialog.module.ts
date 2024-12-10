import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent
  ],
  exports: [DialogComponent]
})
export class DialogModule { }
