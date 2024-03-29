import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-right-icon',
  template: `<svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.59 10.59L2 12L8 6L2 0L0.59 1.41L5.17 6L0.59 10.59Z"
      [attr.fill]="fillColorProps" />
  </svg>`,
})
export class ChevronRightIconComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('fillColor') fillColorProps = '#347CFF';
}
