import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-left-icon',
  template: `<svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
      [attr.fill]="fillColorProps" />
  </svg> `,
})
export class ChevronLeftIconComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('fillColor') fillColorProps = '#347CFF';
}
