import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';

import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TextInputComponent, InputDropdownComponent],
  exports: [TextInputComponent],
})
export class TextInputModule {}
