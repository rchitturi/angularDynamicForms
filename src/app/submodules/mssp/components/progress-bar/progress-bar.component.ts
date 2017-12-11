import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public steps: any = Array(12).fill(0).map((x, i) => i);

  // constructor() { }

  public ngOnInit() {
    console.log('Progress Bar...');
  }

}
