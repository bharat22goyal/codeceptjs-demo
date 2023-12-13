Feature('signup_overalay');

Scenario('live page buttons triggers signup overlay',  ({ I }) => {
    const cssForCloseButton = '.mc_js_login_or_signup .mc_dialog__close'
    const cssForSignUpButton = '[data-testid=joinNowButtonApplet]'

    I.amOnPage('/chat/StellaVerses#!/');
    I.waitForElement('[data-id=buyCreditIcon]',5);
    
    //Get Credits button
    I.click('[data-id=buyCreditIcon]');
    I.seeElement(cssForSignUpButton)
    I.click(cssForCloseButton);

    //Add to favorites button
    I.click('.mc_heart_anim_container')
    I.seeElement(cssForSignUpButton)
    I.click(cssForCloseButton);

    //Surprise buttons
    I.click('[data-id=surpriseIcon]');
    I.seeElement(cssForSignUpButton)
    I.click(cssForCloseButton);

    //Start Session button
    I.click('#mc_btn_start_private');
    I.seeElement(cssForSignUpButton)
    I.click(cssForCloseButton);

    //SGet coins button
    I.click('.mc_icon--credits');
    I.seeElement(cssForSignUpButton)
    I.click(cssForCloseButton);
});
