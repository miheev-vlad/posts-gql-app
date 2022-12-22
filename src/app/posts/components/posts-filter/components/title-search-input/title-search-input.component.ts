import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-title-search-input',
  templateUrl: './title-search-input.component.html',
  styleUrls: ['./title-search-input.component.scss'],
})
export class TitleSearchInputComponent implements OnInit, OnDestroy {
  isDisabled = true;
  isDisabledSub: Subscription;

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
