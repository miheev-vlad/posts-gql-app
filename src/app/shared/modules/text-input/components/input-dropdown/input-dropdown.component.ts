import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItemsInterface } from '../text-input/text-input.component';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
})
export class InputDropdownComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('dropdownItems') dropdownItemsProps: DropdownItemsInterface[] = [];

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('setCheckboxValue') setCheckboxValueEvent =
    new EventEmitter<string>();

  onInput(event: Event): void {
    this.setCheckboxValueEvent.emit(event.target['value']);
  }
}
