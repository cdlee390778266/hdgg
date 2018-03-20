import { HdggPage } from './app.po';

describe('hdgg App', () => {
  let page: HdggPage;

  beforeEach(() => {
    page = new HdggPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
