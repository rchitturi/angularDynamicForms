import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  public transform(value: string): SafeHtml {
    if (!value) { return value; }

    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
