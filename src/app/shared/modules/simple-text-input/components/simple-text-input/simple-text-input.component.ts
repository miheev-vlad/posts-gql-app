import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/shared/services/filter.service';

export interface DropdownItemsInterface {
  name: string;
  value: any;
}

@Component({
  selector: 'app-simple-text-input',
  templateUrl: './simple-text-input.component.html',
  styleUrls: ['./simple-text-input.component.scss'],
})
export class SimpleTextInputComponent implements OnInit, OnDestroy {
  inputValue = '';
  searchTitleStrSub: Subscription;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('label') labelProps: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('placeholder') placeholderProps: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('isDisabled') isDisabledProps = false;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tooltipMessage') tooltipMessageProps = '';

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.searchTitleStrSub = this.filterService.searchTitleStr.subscribe(
      (searchTitleStr: string) => {
        this.inputValue = searchTitleStr;
      }
    );
  }
  ngOnDestroy(): void {
    if (this.searchTitleStrSub) {
      this.searchTitleStrSub.unsubscribe();
    }
  }

  onShowDropdown(): any {}

  onFocus(): void {}

  onBlur(): void {}

  onSetCheckboxValue(value: string): void {}

  onInput(): void {
    this.filterService.setSearchTitleStr(
      this.inputValue ? this.inputValue : ''
    );
  }
}
