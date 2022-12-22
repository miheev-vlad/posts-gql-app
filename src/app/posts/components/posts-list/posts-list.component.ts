import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable, Subscription } from 'rxjs';
import { FilterService } from 'src/app/shared/services/filter.service';

import {
  GET_ALL_POSTS,
  GET_USER_POSTS,
} from 'src/app/shared/services/posts-query';
import { Post } from 'src/__generated__/resolvers-types';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;

  isFilterMode = false;
  isFilterModeSub: Subscription;
  selectedAuthorId = null;
  selectedAuthorIdSub: Subscription;
  searchTitleStr = '';
  searchTitleStrSub: Subscription;
  commentAmount = 'medium';
  commentAmountSub: Subscription;

  itemsPerPage: number = 5;
  currentPage: number;
  totalCount: number;
  pagesCount: number;

  queryParamsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private filterService: FilterService
  ) {}

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
    if (this.isFilterModeSub) {
      this.isFilterModeSub.unsubscribe();
    }
    if (this.selectedAuthorIdSub) {
      this.selectedAuthorIdSub.unsubscribe();
    }
    if (this.searchTitleStrSub) {
      this.searchTitleStrSub.unsubscribe();
    }
    if (this.commentAmountSub) {
      this.commentAmountSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1');
        if (this.isFilterMode) {
          this.fetchUserPosts();
        } else {
          this.fetchAllPosts();
        }
      }
    );

    this.selectedAuthorIdSub = this.filterService.selectedAuthorId.subscribe(
      (selectedAuthorId: number) => {
        this.selectedAuthorId = selectedAuthorId;
      }
    );

    this.isFilterModeSub = this.filterService.isAuthorSelected.subscribe(
      (isAuthorSelected: boolean) => {
        this.isFilterMode = !!isAuthorSelected;
        if (this.isFilterMode) {
          this.router.navigate(['/']);
          this.fetchUserPosts();
        } else {
          this.fetchAllPosts();
        }
      }
    );

    this.searchTitleStrSub = this.filterService.searchTitleStr.subscribe(
      (searchTitleStr: string) => {
        this.searchTitleStr = searchTitleStr;
      }
    );

    this.commentAmountSub = this.filterService.commentAmount.subscribe(
      (commentAmount: string) => {
        this.commentAmount = commentAmount;
      }
    );
  }

  fetchAllPosts(): void {
    this.posts$ = this.apollo
      .watchQuery<{ posts: Post[] }>({
        query: GET_ALL_POSTS,
        fetchPolicy: 'cache-first',
        variables: {
          options: {
            paginate: {
              page: this.currentPage,
              limit: this.itemsPerPage,
            },
          },
        },
      })
      .valueChanges.pipe(
        map(res => {
          this.totalCount = res.data['posts']['meta']['totalCount'];
          this.pagesCount = Math.ceil(this.totalCount / this.itemsPerPage);
          return res.data['posts']['data'];
        })
      );
  }

  fetchUserPosts(): void {
    this.posts$ = this.apollo
      .watchQuery<{ posts: Post[] }>({
        query: GET_USER_POSTS,
        variables: {
          id: this.selectedAuthorId,
          options: {
            paginate: {
              page: this.currentPage,
              limit: this.itemsPerPage,
            },
          },
        },
      })
      .valueChanges.pipe(
        map(res => {
          this.totalCount = 10;
          this.pagesCount = 1;
          return res.data['user']['posts']['data'];
        })
      );
  }
}
