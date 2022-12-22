import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isAuthorSelected = new BehaviorSubject<boolean>(false);

  setIsAuthorSelected() {
    this.isAuthorSelected.next(true);
  }

  clearIsAuthorSelected() {
    this.isAuthorSelected.next(false);
  }
}
