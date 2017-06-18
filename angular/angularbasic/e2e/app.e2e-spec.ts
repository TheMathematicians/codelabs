import { AngularbasicPage } from './app.po';

describe('angularbasic App', () => {
  let page: AngularbasicPage;

  beforeEach(() => {
    page = new AngularbasicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
