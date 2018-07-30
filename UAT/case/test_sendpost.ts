import { Selector } from 'testcafe';
import account from '../base/account';

fixture `fiji`
    .page `https://develop.fiji.gliprc.com/unified-login`.beforeEach(async t => {
        const role = account['chris sandbox']['Yilia Hong'];
        await t.useRole(role);
    });

test('send post', async t => {
    await t
        .click(Selector('p').withText('Team RingCentral Inc'))
        .typeText(Selector('.sc-hrWEMg.hDUqxD').find('div').find('div').find('textarea'), 'Test')
        .pressKey('enter')
        /*
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
        */
});