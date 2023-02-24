const pageCommands = {
  search(word) {
    this
      .click ({selector : '@submitButton', index : 0})
      .setValue('@searchBar', [word,browser.Keys.ENTER]);

    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://testshop.sedtest-school.ru/',
  commands: [pageCommands],
  elements: {
    welcome: 'body > div.container > div:nth-child(1) > div.col-md-3.mt-2 > h4',
    searchBar: {selector: '//input[@name="search"]', locateStrategy: 'xpath'},
    pageTitle: 'body > div.container > div:nth-child(3) > div > div > div > h5',
    submitButton: {selector :'#nav_link_main > a'}
  },
  sections:{
    topMenu: {
      selector: '#navbarCollapse',
      elements: {
        logIn: '#navbarCollapse > div > a.btn.btn-primary',
        myFavorites: '#navbarCollapse > div > a:nth-child(2)',
        myCart: '#navbarCollapse > div > a:nth-child(1)'
      }
    }
  }
}


