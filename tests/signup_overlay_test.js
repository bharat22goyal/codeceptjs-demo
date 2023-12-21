Feature('signup_overlay');

Scenario('live page buttons triggers signup overlay',  async ({ I }) => {
    const cssForCloseButton = '.mc_js_login_or_signup .mc_dialog__close';
    const cssForSignUpButton = '[data-testid=joinNowButtonApplet]';

    I.amOnPage('/');
    I.click("(//*[contains(@class, 'thumb-link')])[1]") //clicks first link on live page
    I.waitForElement('#mc_btn_start_private', 5);

    I.see('LIVE','[data-testid=badgeLive]') //check if the presenter is live

    const clickAndCheck = async (selector) => {
        I.click(selector);
        I.see('Join Now',cssForSignUpButton); //check signup overlay
        I.click(cssForCloseButton);
    };

    await clickAndCheck('#mc_btn_start_private');    //start session button
    await clickAndCheck('[data-id=buyCreditIcon]');  //credits button
    await clickAndCheck('.mc_heart_anim_container'); //add to favourites
    await clickAndCheck('[data-id=surpriseIcon]');   //surprise button
    await clickAndCheck('#mc_btn_start_private');    //start session button
    await clickAndCheck('.mc_icon--credits');        //get coins button
});
