import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SimpleTextInputComponent } from './components/simple-text-input/simple-text-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SimpleTextInputComponent],
  exports: [SimpleTextInputComponent],
})
export class SimpleTextInputModule {}
