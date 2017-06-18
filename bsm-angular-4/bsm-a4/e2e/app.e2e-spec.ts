import { BsmA4Page } from './app.po';

describe('bsm-a4 App', () => {
  let page: BsmA4Page;

  beforeEach(() => {
    page = new BsmA4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
