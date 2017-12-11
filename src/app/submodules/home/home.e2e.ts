import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/#/home');
  });

  it('should have a title', async () => {
    let subject = await browser.getTitle();
    let result  = 'Demo';
    expect(subject).toEqual(result);
  });

  it('should have `your content here` x-large', async () => {
    let subject = await element(by.css('[x-large]')).getText();
    let result  = 'Your Content Here';
    expect(subject).toEqual(result);
  });

});
