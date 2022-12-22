import { Component, Input } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';

export interface DropdownItemsInterface {
  name: string;
  value: any;
}

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  isShowDropdown = false;
  selectedAuthorId: string;
  selectedAuthorName: string;
  inputValue = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('label') labelProps: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('placeholder') placeholderProps: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('isDisabled') isDisabledProps = false;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tooltipMessage') tooltipMessageProps = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('dropdownItems') dropdownItemsProps: DropdownItemsInterface[] = [];

  constructor(private filterService: FilterService) {}

  onShowDropdown(): any {
    if (!this.dropdownItemsProps.length) {
      return false;
    }
    return !!this.isShowDropdown;
  }

  onFocus(): void {
    this.isShowDropdown = true;
  }

  onBlur(): void {
    setTimeout(() => {
      this.isShowDropdown = false;
    }, 500);
  }

  onSetCheckboxValue(value: string): void {
    this.onBlur();
    this.selectedAuthorId = value;
    if (this.selectedAuthorId) {
      this.selectedAuthorName = this.dropdownItemsProps.filter(
        item => item.value === this.selectedAuthorId
      )[0].name;
      this.inputValue = `Выбран: ${this.selectedAuthorName}`;
      this.filterService.setIsAuthorSelected();
    }
  }

  onInput(): void {
    this.filterService.clearIsAuthorSelected();
    this.inputValue = '';
  }
}
