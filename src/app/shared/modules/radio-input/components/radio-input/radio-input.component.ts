import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/shared/services/filter.service';

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
export class RadioInputComponent implements OnInit, OnDestroy {
  form: FormGroup;
  commentAmountSub: Subscription;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('isDisabled') isDisabledProps = false;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tooltipMessage') tooltipMessageProps = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('radioLabels') radioLabelsProps: RadioLabelsInterface[] = [];
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('radioTitle') radioTitleProps = '';

  constructor(private fb: FormBuilder, private filterService: FilterService) {}

  ngOnDestroy(): void {
    this.commentAmountSub.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      radioValue: ['medium'],
    });

    this.commentAmountSub = this.filterService.commentAmount.subscribe(
      (commentAmount: string) => {
        this.form.patchValue({
          radioValue: commentAmount ? commentAmount : 'medium',
        });
      }
    );
  }

  onInput(value: string): void {
    this.filterService.setCommentAmount(value);
  }
}
