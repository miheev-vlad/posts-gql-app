import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChevronLeftIconComponent } from './components/pagination/components/chevron-left/chevron-left-icon.component';
import { ChevronRightIconComponent } from './components/pagination/components/chevron-right/chevron-right-icon.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginationComponent,
    ChevronLeftIconComponent,
    ChevronRightIconComponent,
  ],
  exports: [PaginationComponent],
})
export class PaginationModule {}
