import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RadioLabelsInterface } from 'src/app/shared/modules/radio-input/components/radio-input/radio-input.component';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-comments-amount-input',
  templateUrl: './comments-amount-input.html',
  styleUrls: ['./comments-amount-input.scss'],
})
export class CommentsAmountInputComponent implements OnInit, OnDestroy {
  isDisabled = true;
  isDisabledSub: Subscription;

  radioLabels: RadioLabelsInterface[] = [
    {
      label: 'Без комментариев',
      value: 'min',
      checked: false,
    },
    {
      label: 'До 20 комментариев',
      value: 'medium',
      checked: true,
    },
    {
      label: '20 и больше комментариев',
      value: 'max',
      checked: false,
    },
  ];

  constructor(private filterService: FilterService) {}

  ngOnDestroy(): void {
    this.isDisabledSub.unsubscribe();
  }

  ngOnInit(): void {
    this.isDisabledSub = this.filterService.isAuthorSelected.subscribe(
      (isAuthorSelected: boolean) => {
        this.isDisabled = !isAuthorSelected;
      }
    );
  }
}
