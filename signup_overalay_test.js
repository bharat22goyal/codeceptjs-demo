Feature('signup_overalay');

Scenario('live page buttons triggers signup overlay',  async ({ I }) => {
    const cssForCloseButton = '.mc_js_login_or_signup .mc_dialog__close';
    const cssForSignUpButton = '[data-testid=joinNowButtonApplet]';

    I.amOnPage('chat/PetraPrimeLight#!/');
    I.waitForElement('[data-id=buyCreditIcon]', 5);

    const clickAndCheck = async (selector) => {
        I.click(selector);
        I.seeElement(cssForSignUpButton);
        I.click(cssForCloseButton);
    };

    await clickAndCheck('[data-id=buyCreditIcon]');
    await clickAndCheck('.mc_heart_anim_container');
    await clickAndCheck('[data-id=surpriseIcon]');
    await clickAndCheck('#mc_btn_start_private');
    await clickAndCheck('.mc_icon--credits');
});
