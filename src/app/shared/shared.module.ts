import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TruncateTextPipe } from 'src/app/shared/pipes/truncateText.pipe';
import { FilterPostsPipe } from './pipes/filterPosts.pipe';

@NgModule({
  declarations: [TruncateTextPipe, FilterPostsPipe],
  imports: [CommonModule],
  exports: [TruncateTextPipe, FilterPostsPipe],
})
export class SharedModule {}
