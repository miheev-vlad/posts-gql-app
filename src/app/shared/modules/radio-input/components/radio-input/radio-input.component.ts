import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface RadioLabelsInterface {
  label: string;
  value: any;
  checked: boolean;
}

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent implements OnInit {
  form: FormGroup;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('isDisabled') isDisabledProps = false;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tooltipMessage') tooltipMessageProps = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('radioLabels') radioLabelsProps: RadioLabelsInterface[] = [];
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('radioTitle') radioTitleProps = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      radioValue: new FormControl({
        radioValue: null,
        disabled: this.isDisabledProps,
      }),
    });
  }
}
