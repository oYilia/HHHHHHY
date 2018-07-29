import { Selector } from 'testcafe';

fixture `fiji`
    .page `https://develop.fiji.gliprc.com/unified-login`;

test('Login', async t => {
    await t
        .maximizeWindow()
        .click(Selector('div').withText('Environment').nth(4).find('select'))
        .click(Selector('option').withText('Chris'))
        .click(Selector('button').withText('Login'))
        .typeText(Selector('#credential'), '8662032065')
        .click(Selector('#loginCredentialNext'))
        .typeText(Selector('#pin'), '122')
        .typeText(Selector('#password'), 'Test！123')
        .click(Selector('button').withText('Sign In'))
        .click(Selector('p').withText('Yilia Hong'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), 'Test')
        .pressKey('');
});

test('New Test', async t => {
    await t
        .click(Selector('div').withText('Environment').nth(4).find('select'))
        .click(Selector('option').withText('Chris'))
        .typeText(Selector('#credential'), '8662032065')
        .click(Selector('#credential'))
        .pressKey('enter')
        .typeText(Selector('#pin'), '122')
        .typeText(Selector('#password'), 'Test!123')
        .click(Selector('button').withText('Sign In'))
        .click(Selector('p').withText('Team RingCentral Inc'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), 'Test')
        .click(Selector('.sc-eHgmQL.iKsPTa'))
        .typeText(Selector('.sc-jAaTju.cqxjqq'), 'abc')
        .click(Selector('.Select-placeholder'))
        .typeText(Selector('.Select-input').find('input'), 'c')
        .click(Selector('#react-select-2--option-2'))
        .click(Selector('button').withText('Create Team'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), '???')
        .drag(Selector('.sc-fYxtnH.mtPpb'), -103, 0, {
            offsetX: 75,
            offsetY: 6
        })
        .click(Selector('.sc-uJMKN.hJgycB'))
        .click(Selector('span').withText('Like'))
        .click(Selector('span').withText('Unlike'))
        .click(Selector('span').withText('Pin'))
        .click(Selector('span').withText('Unpin'))
        .click(Selector('span').withText('Edit'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), '123')
        .typeText(Selector('.sc-dxgOiQ.lhqJzO'), 'y')
        .click(Selector('.sc-kAzzGY.jJicDE').nth(1).find('p').withText('Yilia Hong'))
        .click(Selector('.sc-kpOJdX.gSghLr'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), 'hello')
        .click(Selector('p').withText('bb'));
});