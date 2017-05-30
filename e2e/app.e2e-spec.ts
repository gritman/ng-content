import { NgContentPage } from './app.po';

describe('ng-content App', () => {
  let page: NgContentPage;

  beforeEach(() => {
    page = new NgContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
