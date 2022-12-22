import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isAuthorSelected = new BehaviorSubject<boolean>(false);
  selectedAuthorId = new BehaviorSubject<number>(null);
  searchTitleStr = new BehaviorSubject<string>('');
  commentAmount = new BehaviorSubject<string>('medium');

  setIsAuthorSelected() {
    this.isAuthorSelected.next(true);
  }

  clearIsAuthorSelected() {
    this.isAuthorSelected.next(false);
  }

  setSelectedAuthorId(id: number) {
    this.selectedAuthorId.next(id);
  }

  clearSelectedAuthorId() {
    this.selectedAuthorId.next(null);
  }

  setSearchTitleStr(value: string) {
    this.searchTitleStr.next(value);
  }

  clearSearchTitleStr() {
    this.searchTitleStr.next('');
  }

  setCommentAmount(value: string) {
    this.commentAmount.next(value);
  }

  clearCommentAmount() {
    this.commentAmount.next('medium');
  }
}
