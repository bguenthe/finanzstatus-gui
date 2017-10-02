import { FinanzstatusGuiPage } from './app.po';

describe('finanzstatus-gui App', () => {
  let page: FinanzstatusGuiPage;

  beforeEach(() => {
    page = new FinanzstatusGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
