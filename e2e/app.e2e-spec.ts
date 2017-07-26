import { LogInAppPage } from './app.po';

describe('log-in-app App', () => {
  let page: LogInAppPage;

  beforeEach(() => {
    page = new LogInAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
