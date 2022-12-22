import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from 'src/__generated__/resolvers-types';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_POST } from 'src/app/shared/services/posts-query';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post$: Observable<Post>;
  currentId;

  queryParamsSubscription: Subscription;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private apollo: Apollo
  ) {}

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.currentId = params['id'];
        if (this.currentId) {
          this.fetchPost();
        }
      }
    );
  }

  fetchPost(): void {
    this.post$ = this.apollo
      .watchQuery<{ post: Post }>({
        query: GET_POST,
        variables: { id: this.currentId },
      })
      .valueChanges.pipe(map(result => result.data.post));
  }

  onGoBack(): void {
    this.location.back();
  }
}
