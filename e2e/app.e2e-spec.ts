import { BookSnifferCreatePage } from './app.po';

describe('book-sniffer-create App', () => {
  let page: BookSnifferCreatePage;

  beforeEach(() => {
    page = new BookSnifferCreatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
