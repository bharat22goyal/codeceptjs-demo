const assert = require("assert");

Feature('search');

Data(['Matt','Myst','Ann','psy']).Scenario('partial text search should only display matching results', async ({ I,current}) => {
    I.amOnPage('/');
    I.fillField('.toolbar-search-input',current);
    I.click('.toolbar-search-button')
    I.scrollPageToBottom();
    const searchResults = await I.grabTextFromAll('.thumb-data-item--name-container')
    searchResults.forEach((text) => {
        I.assertContain(text.toLocaleLowerCase(),current.toLocaleLowerCase());
    });
});
