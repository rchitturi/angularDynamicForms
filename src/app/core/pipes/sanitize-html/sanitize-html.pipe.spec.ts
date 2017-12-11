import { SanitizeHtmlPipe } from './sanitize-html.pipe';

let html: any = '<div></div>';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(html);
    expect(pipe).toBeTruthy();
  });
});
