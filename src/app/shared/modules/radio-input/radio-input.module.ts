import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RadioInputComponent } from './components/radio-input/radio-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RadioInputComponent],
  exports: [RadioInputComponent],
})
export class RadioInputModule {}
