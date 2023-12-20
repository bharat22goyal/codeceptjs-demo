const assert = require("assert");

Feature('topics');

Data(['Astrology','Tarot','Clairvoyance','Dream interpretation','Healing'
,'Crystals','Mediumship','Crystal ball','Numerology','Runes','Palm','Energy work'])
.Scenario('clicking topics on homepage should display matching content', async ({ I,current}) => {
    I.amOnPage('/');
    I.click(current);
    I.scrollPageToBottom();
    const searchResults = await I.grabTextFromAll('[data-type="performer"] .thumb-data-willingness-list')
    searchResults.forEach((text) => {
        I.assertContain(text,current);
    });

    //TODO - no duplicates are present
});
