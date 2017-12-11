import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sd-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  public breadcrumbs: any[] = [];

  // constructor() { }

  public ngOnInit() {
    console.log('Breadcrumb...');
  }

}
