module.exports = {
  '@tags': ['catalog'],
  
  'Check TestGym title': function (browser) {
      browser
      .url('http://testshop.sedtest-school.ru/')
      .waitForElementVisible('tag name','h4','Заголовок загружен');

  browser.assert.titleEquals ("TestGym"); 
  browser.assert.textContains ("h4","Каталог");

  browser.expect.title().to.contain ('TestGym');
  browser.expect.element ('h4').text.to.contain('Каталог');

  browser.expect.title().to.equal ('TestGym');
  browser.expect.element('h4').text.to.equal('Каталог');

  browser.expect.title().to.match (/TestGym/);
  browser.expect.element('h4').text.to.match(/Каталог/);

  browser.end();
  }
};


//body > div.container > div:nth-child(1) > div.col-md-3.mt-2 > h4
///html/body/div[1]/div[1]/div[1]/h4