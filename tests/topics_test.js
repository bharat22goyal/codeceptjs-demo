const assert = require("assert");

Feature('topics');

Data(['Astrology','Tarot','Clairvoyance','Dream interpretation','Healing'
,'Crystals','Mediumship','Crystal ball','Numerology','Runes','Palm','Energy work'])
.Scenario('clicking topics on homepage should display matching content', async ({ I,current}) => {
    I.amOnPage('/');
    I.click(current);
    I.scrollPageToBottom();
    
    const topicResults = await I.grabTextFromAll('[data-type="performer"] .thumb-data-willingness-list')
    
    //topic results show matching content
    topicResults.forEach((text) => {
        I.assertContain(text,current);
    });

    const performerNames = await I.grabTextFromAll('[data-type="performer"] .thumb-data-item--name')

    //no duplicates are present
    assert.ok(I.checkIfResultContainsDuplicates(performerNames));
});
