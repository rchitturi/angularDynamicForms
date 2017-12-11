import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageTitleService {
  public title: string;

  constructor(
    public browserTitle: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    router.events
      .filter((e) => e instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((e) => {
        let title = e['title'] ? e['title'] : 'Welcome to ' + process.env.PROJECT;
        browserTitle.setTitle(process.env.PROJECT.toUpperCase() + ' :: ' + title);
        this.title = title;
      });
  }

}
