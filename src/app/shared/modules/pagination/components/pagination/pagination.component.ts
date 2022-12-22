import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination ',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  fillColorDisabled = '#3C474C';
  fillColorAvailable = '#347CFF';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('currentPage') currentPageProps = 1;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('pagesCount') pagesCountProps: number;

  constructor(private router: Router) {}

  onPrev(): void {
    if (this.currentPageProps === 1) {
      return;
    }
    this.currentPageProps -= 1;
    this.router.navigate(['/'], {
      queryParams: {
        page: this.currentPageProps,
      },
    });
  }

  onNext(): void {
    if (this.currentPageProps === this.pagesCountProps) {
      return;
    }
    this.currentPageProps += 1;
    this.router.navigate(['/'], {
      queryParams: {
        page: this.currentPageProps,
      },
    });
  }
}
