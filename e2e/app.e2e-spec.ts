import { BikeForBedsPage } from './app.po';

describe('bike-for-beds App', function() {
  let page: BikeForBedsPage;

  beforeEach(() => {
    page = new BikeForBedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
