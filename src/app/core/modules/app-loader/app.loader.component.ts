import {
  Component,
  OnInit,
  ElementRef,
  Renderer
} from '@angular/core';
import { MessageEvent } from '../../services/event-listeners/app.events.service';

@Component({
  selector: 'app-loader',
  providers: [MessageEvent],
  styleUrls: ['./app.loader.component.scss'],
  template: `
    <div id="loader">
        <div class="inner-container">
            <div class="layer-bg"></div>
            <div class="spinner">
              <div class="uil-flickr-css" style="transform:scale(0.45);">
                <div></div><div></div>
              </div>
            </div>
        </div>
    </div>
  `
})
export class AppLoaderComponent implements OnInit {
  constructor(
    private messageEvent: MessageEvent,
    public element: ElementRef,
    public renderer: Renderer
  ) {}

  public ngOnInit() {
    let el = document.getElementById('main-content');
    this.messageEvent.on().subscribe((message) => {
      if (message === 'Loader_On') {
        // console.log('ON');
        this.__addClass(el, 'loader');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'block');
      } else {
        // console.log('OFF');
        this.__removeClass(el, 'loader');
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }

  private __hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  }

  private __addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!this.__hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  private __removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (this.__hasClass(el, className)) {
      let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }
}
