import { BsmPage } from './app.po';

describe('bsm App', () => {
  let page: BsmPage;

  beforeEach(() => {
    page = new BsmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
