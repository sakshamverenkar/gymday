import { GymdayPage } from './app.po';

describe('gymday App', () => {
  let page: GymdayPage;

  beforeEach(() => {
    page = new GymdayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
