module.exports = {
  '@tags': ['search'],

  before(browser) {
    browser.page.testgym()
      .navigate()
      .waitForElementVisible('css selector','@welcome', 'Welcome title visible')
      .assert.textContains('@welcome', 'Каталог', 'Welcome title ok')
  },
  after(browser) {
    browser.end();
  },

  'Search for word': function (browser) {
    let word = browser.globals.searchText;

    browser.assert.notEmpty('#navbarCollapse > div > a.btn.btn-primary');
    browser.strictClick('#nav_link_main > a');

    browser.page.testgym()
      .search(word)
      .waitForElementVisible('css selector','@pageTitle', 'Page title here')
      .assert.textContains('@pageTitle', word, `Search title ok`);

    browser
      .page.testgym()
      .section.topMenu
      .assert.textContains('@logIn', 'Войти');
  },

};
